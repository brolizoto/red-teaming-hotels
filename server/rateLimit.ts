/**
 * Rate Limiting für Kontaktformular
 * Verhindert Spam durch Begrenzung der Anfragen pro IP-Adresse
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
  firstRequestAt: number;
}

// In-Memory Store für Rate Limiting
// Für Produktion mit hohem Traffic: Redis verwenden
const requestCounts = new Map<string, RateLimitRecord>();

// Cleanup alte Einträge alle 10 Minuten
setInterval(() => {
  const now = Date.now();
  requestCounts.forEach((record, ip) => {
    if (now > record.resetAt) {
      requestCounts.delete(ip);
    }
  });
}, 10 * 60 * 1000);

export interface RateLimitConfig {
  /** Maximale Anzahl Anfragen pro Zeitfenster */
  maxRequests: number;
  /** Zeitfenster in Millisekunden (default: 1 Stunde) */
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfter?: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 5,
  windowMs: 60 * 60 * 1000, // 1 Stunde
};

/**
 * Prüft, ob eine IP-Adresse das Rate Limit überschritten hat
 */
export function checkRateLimit(
  ip: string,
  config: Partial<RateLimitConfig> = {}
): RateLimitResult {
  const { maxRequests, windowMs } = { ...DEFAULT_CONFIG, ...config };
  const now = Date.now();
  const record = requestCounts.get(ip);

  // Erste Anfrage von dieser IP
  if (!record) {
    requestCounts.set(ip, {
      count: 1,
      resetAt: now + windowMs,
      firstRequestAt: now,
    });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetAt: now + windowMs,
    };
  }

  // Zeitfenster abgelaufen → Reset
  if (now > record.resetAt) {
    requestCounts.set(ip, {
      count: 1,
      resetAt: now + windowMs,
      firstRequestAt: now,
    });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetAt: now + windowMs,
    };
  }

  // Limit überschritten
  if (record.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: record.resetAt,
      retryAfter: Math.ceil((record.resetAt - now) / 1000), // Sekunden
    };
  }

  // Anfrage erlaubt, Counter erhöhen
  record.count++;
  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetAt: record.resetAt,
  };
}

/**
 * Extrahiert IP-Adresse aus Request
 * Berücksichtigt Proxy-Header (X-Forwarded-For, X-Real-IP)
 */
export function getClientIp(req: any): string {
  // Cloudflare
  if (req.headers['cf-connecting-ip']) {
    return req.headers['cf-connecting-ip'];
  }

  // Standard Proxy-Header
  if (req.headers['x-forwarded-for']) {
    const ips = req.headers['x-forwarded-for'].split(',');
    return ips[0].trim();
  }

  if (req.headers['x-real-ip']) {
    return req.headers['x-real-ip'];
  }

  // Fallback: Socket IP
  return req.ip || req.socket?.remoteAddress || 'unknown';
}

/**
 * Gibt aktuelle Rate Limit Stats zurück (für Debugging)
 */
export function getRateLimitStats() {
  const now = Date.now();
  const activeIps = Array.from(requestCounts.entries())
    .filter(([_, record]) => now <= record.resetAt)
    .map(([ip, record]) => ({
      ip,
      count: record.count,
      resetAt: new Date(record.resetAt).toISOString(),
      remaining: DEFAULT_CONFIG.maxRequests - record.count,
    }));

  return {
    totalTrackedIps: requestCounts.size,
    activeIps: activeIps.length,
    config: DEFAULT_CONFIG,
    ips: activeIps,
  };
}
