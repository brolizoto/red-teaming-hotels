import { notifyOwner } from "./_core/notification";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

export async function sendContactNotification(data: ContactFormData): Promise<boolean> {
  const title = `Neue Kontaktanfrage von ${data.name}`;
  
  const content = `
**Neue Kontaktanfrage über Red Teaming for Hotels**

**Name:** ${data.name}
**E-Mail:** ${data.email}
**Telefon:** ${data.phone}
${data.company ? `**Hotel/Unternehmen:** ${data.company}` : ''}
${data.message ? `\n**Nachricht:**\n${data.message}` : ''}

---
Eingegangen am: ${new Date().toLocaleString('de-CH', { timeZone: 'Europe/Zurich' })}
  `.trim();

  try {
    const success = await notifyOwner({ title, content });
    return success;
  } catch (error) {
    console.error("[Email] Failed to send contact notification:", error);
    return false;
  }
}
