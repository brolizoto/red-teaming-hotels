import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createOwnerContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: process.env.OWNER_OPEN_ID || "test-owner",
    email: "owner@example.com",
    name: "Owner User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

function createNonOwnerContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "non-owner-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

describe("admin.listContactRequests", () => {
  it("allows owner to list contact requests", async () => {
    const { ctx } = createOwnerContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.listContactRequests();

    expect(Array.isArray(result)).toBe(true);
  });

  it("denies non-owner access", async () => {
    const { ctx } = createNonOwnerContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.listContactRequests()).rejects.toThrow("Only the owner can access this resource");
  });
});

describe("admin.updateStatus", () => {
  it("allows owner to update status", async () => {
    const { ctx } = createOwnerContext();
    const caller = appRouter.createCaller(ctx);

    // First create a contact request
    await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      phone: "+41 78 123 45 67",
      company: "Test Hotel",
      message: "Test message",
    });

    // Get all requests to find the ID
    const requests = await caller.admin.listContactRequests();
    const latestRequest = requests[requests.length - 1];

    if (latestRequest) {
      const result = await caller.admin.updateStatus({
        id: latestRequest.id,
        status: "contacted",
      });

      expect(result.success).toBe(true);
    }
  });

  it("denies non-owner access", async () => {
    const { ctx } = createNonOwnerContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.updateStatus({
        id: 1,
        status: "contacted",
      })
    ).rejects.toThrow("Only the owner can access this resource");
  });
});

describe("admin.getContactRequest", () => {
  it("allows owner to get single contact request", async () => {
    const { ctx } = createOwnerContext();
    const caller = appRouter.createCaller(ctx);

    // First create a contact request
    await caller.contact.submit({
      name: "Test User 2",
      email: "test2@example.com",
      phone: "+41 78 123 45 68",
      company: "Test Hotel 2",
      message: "Test message 2",
    });

    // Get all requests to find the ID
    const requests = await caller.admin.listContactRequests();
    const latestRequest = requests[requests.length - 1];

    if (latestRequest) {
      const result = await caller.admin.getContactRequest({
        id: latestRequest.id,
      });

      expect(result).toBeDefined();
      expect(result.id).toBe(latestRequest.id);
      expect(result.email).toBeDefined();
    }
  });

  it("denies non-owner access", async () => {
    const { ctx } = createNonOwnerContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.getContactRequest({
        id: 1,
      })
    ).rejects.toThrow("Only the owner can access this resource");
  });
});
