'use client'

import { useState } from 'react'
import { formLabelStyle } from '@/lib/formStyles'

interface ContactFormProps {
  successMessage: string
}

export function ContactForm({ successMessage }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }

    if (!data.name || !data.email || !data.message) {
      setErrorMsg('Please fill in all required fields.')
      setStatus('error')
      return
    }

    if (data.message.length < 10) {
      setErrorMsg('Message must be at least 10 characters.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({})) as {
          error?: string
          issues?: { fieldErrors?: Record<string, string[]> }
        }
        const fieldErrors = json.issues?.fieldErrors
        const firstIssue = fieldErrors
          ? Object.values(fieldErrors).flat().find(Boolean)
          : undefined
        throw new Error(firstIssue ?? json.error ?? 'Submission failed.')
      }

      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '40px', background: '#f0f9f4', border: '1px solid #b8e6c8', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '18px', color: '#0b1c33', marginBottom: '8px' }}>Message sent</div>
        <p style={{ margin: 0, fontSize: '15px', color: '#5a626c' }}>{successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label htmlFor="cf-name" style={formLabelStyle}>Name *</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            className="mtr-field"
            style={{ height: '50px', padding: '0 15px' }}
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={formLabelStyle}>Email *</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="name@company.com.au"
            className="mtr-field"
            style={{ height: '50px', padding: '0 15px' }}
          />
        </div>
        <div>
          <label htmlFor="cf-message" style={formLabelStyle}>Message *</label>
          <textarea
            id="cf-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            placeholder="How can we help? (at least 10 characters)"
            className="mtr-field"
            style={{ resize: 'vertical', padding: '14px 15px', minHeight: '160px', lineHeight: 1.6 }}
          />
        </div>

        {status === 'error' && (
          <p style={{ margin: 0, fontSize: '14px', color: '#c0392b', fontFamily: 'var(--font-archivo)', fontWeight: 600 }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mtr-cta-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '56px',
            padding: '0 34px',
            background: status === 'submitting' ? '#8b929b' : '#0b1c33',
            color: '#fff',
            fontFamily: 'var(--font-archivo)',
            fontSize: '15.5px',
            fontWeight: 700,
            border: 'none',
            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
            clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 14px) 100%,0 100%)',
            marginTop: '6px',
          }}
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
