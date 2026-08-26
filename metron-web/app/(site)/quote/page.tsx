import { getPayload } from '@/lib/payload'
import { QuoteForm } from '@/components/home/QuoteForm'
import { InnerHero } from '@/components/ui/InnerHero'
import Link from 'next/link'

const STEPS = [
  { no: '1', text: 'We read the scope and come back with any clarifying questions.' },
  { no: '2', text: 'You receive a proposed approach, programme and fee.' },
  { no: '3', text: 'On acceptance, the engineer who quoted runs the job.' },
]

export default async function QuotePage() {
  let email = ''

  try {
    const payload = await getPayload()
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    const s = settings as Record<string, string>
    email = s.email ?? ''
  } catch { /* CMS unavailable */ }

  const sidebarLabelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-archivo)',
    fontWeight: 600,
    fontSize: '11.5px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: '#7fc4e8',
  }

  return (
    <>
      <InnerHero
        badgeLeft="Get a quote"
        badgeRight="Response within two business days"
        heading="Send us the scope."
        body="Drawings, sketches, specifications or a short description — whatever you have is enough to start. We will come back with an approach and a price."
        headingMaxWidth={800}
        bodyMaxWidth={560}
        showOrb
      />

      <section id="form" style={{ background: '#f5f7f9', padding: '100px 0 120px', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap mtr-quote-outer">

          {/* ── Form card ─────────────────────────────────────────────── */}
          <div style={{ background: '#fff', border: '1px solid #e4e7eb', padding: '44px 44px 48px' }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '26px', letterSpacing: '-0.02em', color: '#0b1c33' }}>
              Project enquiry
            </h2>
            <p style={{ margin: '10px 0 34px', fontSize: '15.5px', lineHeight: 1.6, color: '#5a626c' }}>
              Fields marked with an asterisk are required.
            </p>
            <QuoteForm />
          </div>

          {/* ── Sidebar ───────────────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '110px' }}>

            {/* Card 1 — dark navy contact info */}
            <div style={{ background: '#0b1c33', padding: '34px 30px 36px' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '19px', color: '#fff' }}>
                Metron Engineering Services Pty Ltd
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '26px' }}>
                <div>
                  <div style={sidebarLabelStyle}>Email</div>
                  <a
                    href={`mailto:${email}`}
                    className="mtr-dark-link"
                    style={{ display: 'block', marginTop: '7px', fontSize: '15.5px', color: '#fff' }}
                  >
                    {email}
                  </a>
                </div>
                <div>
                  <div style={sidebarLabelStyle}>Office</div>
                  <div style={{ marginTop: '7px', fontSize: '15.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
                    Shelley, Western Australia
                  </div>
                </div>
                <div>
                  <div style={sidebarLabelStyle}>Coverage</div>
                  <div style={{ marginTop: '7px', fontSize: '15.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
                    Projects supported Australia-wide
                  </div>
                </div>
                <div>
                  <div style={sidebarLabelStyle}>Hours</div>
                  <div style={{ marginTop: '7px', fontSize: '15.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
                    Mon – Fri, 7:30 am – 5:00 pm AWST
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — What happens next */}
            <div style={{ border: '1px solid #e4e7eb', background: '#fff', padding: '30px 28px 32px' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '16.5px', color: '#0b1c33' }}>
                What happens next
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb', marginTop: '18px' }}>
                {STEPS.map(step => (
                  <div key={step.no} style={{ background: '#fff', padding: '15px 16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{
                      flexShrink: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: '#0b1c33',
                      color: '#fff',
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: '12px',
                    }}>
                      {step.no}
                    </span>
                    <span style={{ fontSize: '14.5px', lineHeight: 1.55, color: '#26303b' }}>
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3 — Not ready to quote? */}
            <div style={{ border: '1px solid #e4e7eb', background: '#fff', padding: '26px 28px 28px' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '16.5px', color: '#0b1c33' }}>
                Not ready to quote?
              </div>
              <p style={{ margin: '10px 0 18px', fontSize: '14.5px', lineHeight: 1.6, color: '#5a626c' }}>
                For a general question, our contact details and a short message form are on the contact page.
              </p>
              <Link
                href="/contact"
                className="mtr-btn-dark"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '46px',
                  padding: '0 20px',
                  border: '1px solid #cfd5dc',
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#0b1c33',
                }}
              >
                Contact details ⟶
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
