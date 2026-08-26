import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from '@/lib/payload'
import { checkRateLimit } from '@/lib/rateLimit'
import { contactSchema } from '@/lib/validation'
import { sendContactNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown'

  try {
    await checkRateLimit(ip)
  } catch {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed.', issues: parsed.error.flatten() }, { status: 422 })
  }

  const payload = await getPayload()
  await payload.create({
    collection: 'contact-submissions',
    data: parsed.data,
  })

  await sendContactNotification(parsed.data).catch(() => {
    // email is best-effort — don't fail the request if SMTP is down
  })

  return NextResponse.json({ success: true }, { status: 201 })
}
