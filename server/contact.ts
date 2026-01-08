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
