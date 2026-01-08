import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("contact.submit", () => {
  it("accepts valid contact form submission", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      phone: "+41 78 123 45 67",
      company: "Test Hotel",
      message: "This is a test message",
    });

    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("emailSent");
    expect(typeof result.emailSent).toBe("boolean");
  });

  it("accepts minimal contact form submission without optional fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Minimal User",
      email: "minimal@example.com",
      phone: "+41 78 999 88 77",
    });

    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("emailSent");
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        phone: "+41 78 123 45 67",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with missing required fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        phone: "+41 78 123 45 67",
      })
    ).rejects.toThrow();
  });
});
