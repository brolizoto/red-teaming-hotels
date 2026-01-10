import { notifyOwner } from "./_core/notification";
import { Resend } from "resend";
import { ENV } from "./_core/env";

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
    // Send via Manus notification system
    const notificationSuccess = await notifyOwner({ title, content });
    
    // Send via email to contact@redteaming.ch
    const emailSuccess = await sendEmailToContact(data);
    
    return notificationSuccess || emailSuccess;
  } catch (error) {
    console.error("[Email] Failed to send contact notification:", error);
    return false;
  }
}

export async function sendEmailToContact(data: ContactFormData): Promise<boolean> {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.warn("[Email] RESEND_API_KEY not configured, skipping email send");
      return false;
    }

    const resend = new Resend(resendApiKey);

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>RED TEAMING for Hotels</h1>
              <p>Neue Kontaktanfrage</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">E-Mail:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              ${data.company ? `
              <div class="field">
                <div class="label">Hotel/Unternehmen:</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}
              ${data.message ? `
              <div class="field">
                <div class="label">Nachricht:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Eingegangen am:</div>
                <div class="value">${new Date().toLocaleString('de-CH', { timeZone: 'Europe/Zurich' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>Diese E-Mail wurde automatisch über das Kontaktformular auf redteaming.ch generiert.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: result, error } = await resend.emails.send({
      from: 'Red Teaming for Hotels <noreply@redteaming.ch>',
      to: ['contact@redteaming.ch'],
      subject: `Neue Kontaktanfrage von ${data.name}`,
      html: htmlContent,
      replyTo: data.email,
    });

    if (error) {
      console.error("[Email] Resend error:", error);
      return false;
    }

    console.log("[Email] Successfully sent to contact@redteaming.ch:", result);
    return true;
  } catch (error) {
    console.error("[Email] Failed to send email via Resend:", error);
    return false;
  }
}
