import { RateLimiterMemory } from 'rate-limiter-flexible'

// 5 submissions per IP per 10 minutes
const limiter = new RateLimiterMemory({
  points: 5,
  duration: 600,
})

export async function checkRateLimit(ip: string): Promise<void> {
  await limiter.consume(ip)
}
