import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createContactRequest, getAllContactRequests, updateContactRequestStatus, getContactRequestById } from "./contact";
import { sendContactNotification } from "./email";
import { ENV } from "./_core/env";
import { verifyTurnstileToken } from "./turnstile";
import { checkRateLimit, getClientIp } from "./rateLimit";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name ist erforderlich"),
          email: z.string().email("Ungültige E-Mail-Adresse"),
          phone: z.string().min(1, "Telefon ist erforderlich"),
          company: z.string().optional(),
          message: z.string().optional(),
          turnstileToken: z.string().optional(),
          honeypot: z.string().optional(), // Honeypot-Feld
          formOpenedAt: z.number().optional(), // Zeitstempel
        })
      )
      .mutation(async ({ input, ctx }) => {
        // 1. Rate Limiting prüfen
        const clientIp = getClientIp(ctx.req);
        const rateLimit = checkRateLimit(clientIp);
        
        if (!rateLimit.allowed) {
          throw new TRPCError({
            code: "TOO_MANY_REQUESTS",
            message: `Zu viele Anfragen. Bitte versuchen Sie es in ${rateLimit.retryAfter} Sekunden erneut.`,
          });
        }

        // 2. Honeypot-Feld prüfen (sollte leer sein)
        if (input.honeypot && input.honeypot.trim() !== '') {
          console.warn(`⚠️  Honeypot triggered from IP ${clientIp}`);
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Ungültige Anfrage.",
          });
        }

        // 3. Zeitbasierte Validierung (mindestens 3 Sekunden)
        if (input.formOpenedAt) {
          const now = Date.now();
          const timeDiff = now - input.formOpenedAt;
          
          if (timeDiff < 3000) {
            console.warn(`⚠️  Form submitted too fast (${timeDiff}ms) from IP ${clientIp}`);
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Bitte nehmen Sie sich etwas mehr Zeit zum Ausfüllen des Formulars.",
            });
          }
        }
        // Verify Turnstile token if provided
        if (input.turnstileToken) {
          const verification = await verifyTurnstileToken(
            input.turnstileToken,
            ctx.req.ip || ctx.req.socket.remoteAddress
          );
          
          if (!verification.success) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Spam-Schutz-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.",
            });
          }
        }
        // Save to database
        await createContactRequest({
          name: input.name,
          email: input.email,
          phone: input.phone,
          company: input.company,
          message: input.message,
          status: "pending",
        });

        // Send notification email
        const emailSent = await sendContactNotification(input);

        return {
          success: true,
          emailSent,
        };
      }),
  }),

  admin: router({
    // List all contact requests (owner only)
    listContactRequests: protectedProcedure
      .query(async ({ ctx }) => {
        // Check if user is owner
        if (ctx.user.openId !== ENV.ownerOpenId) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Only the owner can access this resource",
          });
        }

        return await getAllContactRequests();
      }),

    // Update contact request status (owner only)
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["pending", "contacted", "completed"]),
        })
      )
      .mutation(async ({ ctx, input }) => {
        // Check if user is owner
        if (ctx.user.openId !== ENV.ownerOpenId) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Only the owner can access this resource",
          });
        }

        await updateContactRequestStatus(input.id, input.status);
        return { success: true };
      }),

    // Get single contact request (owner only)
    getContactRequest: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ ctx, input }) => {
        // Check if user is owner
        if (ctx.user.openId !== ENV.ownerOpenId) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Only the owner can access this resource",
          });
        }

        const request = await getContactRequestById(input.id);
        if (!request) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Contact request not found",
          });
        }
        return request;
      }),
  }),
});

export type AppRouter = typeof appRouter;
