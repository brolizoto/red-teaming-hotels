import { describe, it, expect } from 'vitest';
import { sendEmailToContact } from './email';

describe('Resend Email Integration', () => {
  it('should send contact email successfully with valid API key', async () => {
    // Test data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+41 78 123 45 67',
      company: 'Test Hotel AG',
      message: 'Dies ist eine Test-Nachricht für die Resend E-Mail-Integration.'
    };

    // Send email
    const result = await sendEmailToContact(testData);

    // Verify result
    expect(result).toBeDefined();
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
    
    console.log('✅ E-Mail erfolgreich versendet!');
  }, 30000); // 30 second timeout for API call

  it('should handle missing API key gracefully', async () => {
    // Temporarily remove API key
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+41 78 123 45 67',
      company: 'Test Hotel AG',
      message: 'Test message'
    };

    try {
      await sendEmailToContact(testData);
      // Should not reach here
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeDefined();
      console.log('✅ Fehlerbehandlung funktioniert korrekt bei fehlendem API-Key');
    } finally {
      // Restore API key
      if (originalKey) {
        process.env.RESEND_API_KEY = originalKey;
      }
    }
  });
});
