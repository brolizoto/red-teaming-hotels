import { contactRequests, InsertContactRequest } from "../drizzle/schema";
import { getDb } from "./db";

export async function createContactRequest(data: InsertContactRequest) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(contactRequests).values(data);
  return result;
}

export async function getAllContactRequests() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(contactRequests).orderBy(contactRequests.createdAt);
}

import { eq } from "drizzle-orm";

export async function updateContactRequestStatus(id: number, status: "pending" | "contacted" | "completed") {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(contactRequests)
    .set({ status, updatedAt: new Date() })
    .where(eq(contactRequests.id, id));
}

export async function getContactRequestById(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.select().from(contactRequests).where(eq(contactRequests.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}
