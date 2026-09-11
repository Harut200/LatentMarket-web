type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

const globalRateLimits = globalThis as typeof globalThis & {
  latentMarketRateLimits?: Map<string, RateLimitEntry>;
};

const store =
  globalRateLimits.latentMarketRateLimits ?? new Map<string, RateLimitEntry>();

globalRateLimits.latentMarketRateLimits = store;

export function consumeRateLimit(
  keys: string[],
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();

  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key);
  }

  const blocked = keys
    .map((key) => store.get(key))
    .find((entry) => entry && entry.resetAt > now && entry.count >= limit);

  if (blocked) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((blocked.resetAt - now) / 1000)),
    };
  }

  for (const key of keys) {
    const entry = store.get(key);
    if (!entry || entry.resetAt <= now) {
      store.set(key, { count: 1, resetAt: now + windowMs });
    } else {
      entry.count += 1;
    }
  }

  return { allowed: true };
}
