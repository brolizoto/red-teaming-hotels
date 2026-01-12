/**
 * Cloudflare Turnstile Backend Verification
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || '';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export interface TurnstileVerificationResult {
  success: boolean;
  error?: string;
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<TurnstileVerificationResult> {
  // Skip verification in development if no secret key is set
  if (!TURNSTILE_SECRET_KEY) {
    console.warn('⚠️  TURNSTILE_SECRET_KEY not set - skipping verification (development mode)');
    return { success: true };
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (!data.success) {
      console.error('Turnstile verification failed:', data['error-codes']);
      return {
        success: false,
        error: `Verification failed: ${data['error-codes']?.join(', ') || 'Unknown error'}`,
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return {
      success: false,
      error: 'Verification request failed',
    };
  }
}
