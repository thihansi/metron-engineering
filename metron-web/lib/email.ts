import nodemailer from 'nodemailer'

function isConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS,
  )
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function safeDisplayName(name: string): string {
  return name.replace(/[\\"]/g, (c) => `\\${c}`)
}

const BASE_STYLES = `
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  color: #16191e;
  line-height: 1.6;
`

function field(label: string, value: string | undefined) {
  if (!value) return ''
  const safe = escHtml(value).replace(/\n/g, '<br>')
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #e4e7eb;font-weight:600;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#7c848e;white-space:nowrap;vertical-align:top;width:160px">
        ${label}
      </td>
      <td style="padding:10px 16px;border-bottom:1px solid #e4e7eb;color:#16191e;vertical-align:top">
        ${safe}
      </td>
    </tr>
  `
}

function layout(subject: string, rows: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f7f9;${BASE_STYLES}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7f9;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="background:#0b1c33;padding:28px 32px;border-radius:2px 2px 0 0">
            <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#7fc4e8">
              Metron Engineering Services
            </p>
            <p style="margin:8px 0 0;font-size:20px;font-weight:700;color:#ffffff">
              ${escHtml(subject)}
            </p>
          </td>
        </tr>

        <!-- Fields -->
        <tr>
          <td style="background:#ffffff;border:1px solid #e4e7eb;border-top:none;border-radius:0 0 2px 2px">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 0 0;text-align:center;font-size:12px;color:#8b929b">
            Submitted via metronengineering.com.au
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export interface ContactEmailData {
  name: string
  email: string
  message: string
}

export async function sendContactNotification(data: ContactEmailData) {
  if (!isConfigured()) return

  const to = process.env.SMTP_NOTIFY_TO ?? process.env.SMTP_USER!
  const from = `"Metron Website" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`

  const html = layout(
    'New contact message',
    field('Name', data.name) +
    field('Email', data.email) +
    field('Message', data.message),
  )

  await createTransporter().sendMail({
    from,
    to,
    replyTo: `"${safeDisplayName(data.name)}" <${data.email}>`,
    subject: `Contact: ${data.name}`,
    html,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
  })
}

export interface QuoteEmailData {
  name: string
  company?: string
  email: string
  phone?: string
  serviceRequired: string
  projectLocation?: string
  indicativeTiming?: string
  description: string
  attachments?: { filename: string; size: string }[]
}

export async function sendQuoteNotification(data: QuoteEmailData) {
  if (!isConfigured()) return

  const to = process.env.SMTP_NOTIFY_TO ?? process.env.SMTP_USER!
  const from = `"Metron Website" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`

  const attachmentList = data.attachments?.length
    ? data.attachments.map(a => `${escHtml(a.filename)} (${escHtml(a.size)})`).join('<br>')
    : undefined

  const html = layout(
    'New quote request',
    field('Name', data.name) +
    field('Company', data.company) +
    field('Email', data.email) +
    field('Phone', data.phone) +
    field('Service', data.serviceRequired) +
    field('Location', data.projectLocation) +
    field('Timing', data.indicativeTiming) +
    field('Description', data.description) +
    field('Attachments', attachmentList),
  )

  const textLines = [
    `Name: ${data.name}`,
    data.company ? `Company: ${data.company}` : '',
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : '',
    `Service: ${data.serviceRequired}`,
    data.projectLocation ? `Location: ${data.projectLocation}` : '',
    data.indicativeTiming ? `Timing: ${data.indicativeTiming}` : '',
    `\nDescription:\n${data.description}`,
    attachmentList ? `\nAttachments:\n${data.attachments!.map(a => `- ${a.filename} (${a.size})`).join('\n')}` : '',
  ].filter(Boolean).join('\n')

  await createTransporter().sendMail({
    from,
    to,
    replyTo: `"${safeDisplayName(data.name)}" <${data.email}>`,
    subject: `Quote request: ${data.name}${data.company ? ` — ${data.company}` : ''}`,
    html,
    text: textLines,
  })
}
