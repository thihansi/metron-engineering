import type { Metadata } from 'next'
import { getPayload } from '@/lib/payload'
import { QuoteForm } from '@/components/home/QuoteForm'
import { InnerHero } from '@/components/ui/InnerHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get a Quote | Metron Engineering Services',
  description: 'Request an engineering quote from Metron Engineering Services. Send your scope, drawings or a short description and receive an approach and price within two business days.',
}

type Step = { no: string; text: string }

export default async function QuotePage() {
  let email = ''
  let heroBadgeLeft = 'Get a quote'
  let heroBadgeRight = 'Response within two business days'
  let heroHeading = 'Send us the scope.'
  let heroBody =
    'Drawings, sketches, specifications or a short description — whatever you have is enough to start. We will come back with an approach and a price.'
  let formTitle = 'Project enquiry'
  let formSubheading = 'Fields marked with an asterisk are required.'
  let formSuccessHeading = 'Quote request received'
  let formSuccessBody =
    'Thanks for reaching out. We will review your project details and come back with an approach and a price — typically within two business days.'
  let submitLabel = 'Send enquiry'
  let services: string[] = []
  let sidebarCompanyName = 'Metron Engineering Services Pty Ltd'
  let sidebarOfficeLabel = 'Office'
  let sidebarOfficeValue = 'Shelley, Western Australia'
  let sidebarCoverageLabel = 'Coverage'
  let sidebarCoverageValue = 'Projects supported Australia-wide'
  let sidebarHoursLabel = 'Hours'
  let sidebarHoursValue = 'Mon – Fri, 7:30 am – 5:00 pm AWST'
  let stepsHeading = 'What happens next'
  let steps: Step[] = []
  let contactFallbackHeading = 'Not ready to quote?'
  let contactFallbackBody =
    'For a general question, our contact details and a short message form are on the contact page.'
  let contactFallbackLabel = 'Contact details ⟶'
  let contactFallbackHref = '/contact'

  try {
    const payload = await getPayload()
    const [pg, settings] = await Promise.all([
      payload.findGlobal({ slug: 'quote-page' }),
      payload.findGlobal({ slug: 'site-settings' }),
    ])
    const p = pg as Record<string, unknown>
    const str = (k: string, fallback = '') => (typeof p[k] === 'string' ? (p[k] as string) : fallback)

    email = (settings as { email?: string })?.email ?? ''
    heroBadgeLeft = str('heroBadgeLeft', heroBadgeLeft)
    heroBadgeRight = str('heroBadgeRight', heroBadgeRight)
    heroHeading = str('heroHeading', heroHeading)
    heroBody = str('heroBody', heroBody)
    formTitle = str('formTitle', formTitle)
    formSubheading = str('formSubheading', formSubheading)
    formSuccessHeading = str('formSuccessHeading', formSuccessHeading)
    formSuccessBody = str('formSuccessBody', formSuccessBody)
    submitLabel = str('submitLabel', submitLabel)
    sidebarCompanyName = str('sidebarCompanyName', sidebarCompanyName)
    sidebarOfficeLabel = str('sidebarOfficeLabel', sidebarOfficeLabel)
    sidebarOfficeValue = str('sidebarOfficeValue', sidebarOfficeValue)
    sidebarCoverageLabel = str('sidebarCoverageLabel', sidebarCoverageLabel)
    sidebarCoverageValue = str('sidebarCoverageValue', sidebarCoverageValue)
    sidebarHoursLabel = str('sidebarHoursLabel', sidebarHoursLabel)
    sidebarHoursValue = str('sidebarHoursValue', sidebarHoursValue)
    stepsHeading = str('stepsHeading', stepsHeading)
    contactFallbackHeading = str('contactFallbackHeading', contactFallbackHeading)
    contactFallbackBody = str('contactFallbackBody', contactFallbackBody)
    contactFallbackLabel = str('contactFallbackLabel', contactFallbackLabel)
    contactFallbackHref = str('contactFallbackHref', contactFallbackHref)

    if (Array.isArray(p.serviceOptions)) {
      services = p.serviceOptions
        .map((row) => (row && typeof row === 'object' && typeof (row as { label?: unknown }).label === 'string'
          ? (row as { label: string }).label
          : null))
        .filter((x): x is string => Boolean(x))
    }
    if (Array.isArray(p.steps)) {
      steps = p.steps
        .map((row) => {
          if (!row || typeof row !== 'object') return null
          const s = row as { no?: unknown; text?: unknown }
          if (typeof s.no !== 'string' || typeof s.text !== 'string') return null
          return { no: s.no, text: s.text }
        })
        .filter((x): x is Step => x !== null)
    }
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
        badgeLeft={heroBadgeLeft}
        badgeRight={heroBadgeRight}
        heading={heroHeading}
        body={heroBody}
        headingMaxWidth={800}
        bodyMaxWidth={560}
        showOrb
      />

      <section id="form" style={{ background: '#f5f7f9', padding: '100px 0 120px', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap mtr-quote-outer">
          <div style={{ background: '#fff', border: '1px solid #e4e7eb', padding: '44px 44px 48px' }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '26px', letterSpacing: '-0.02em', color: '#0b1c33' }}>
              {formTitle}
            </h2>
            <p style={{ margin: '10px 0 34px', fontSize: '15.5px', lineHeight: 1.6, color: '#5a626c' }}>
              {formSubheading}
            </p>
            <QuoteForm
              services={services}
              successHeading={formSuccessHeading}
              successBody={formSuccessBody}
              submitLabel={submitLabel}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '110px' }}>
            <div style={{ background: '#0b1c33', padding: '34px 30px 36px' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '19px', color: '#fff' }}>
                {sidebarCompanyName}
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
                  <div style={sidebarLabelStyle}>{sidebarOfficeLabel}</div>
                  <div style={{ marginTop: '7px', fontSize: '15.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
                    {sidebarOfficeValue}
                  </div>
                </div>
                <div>
                  <div style={sidebarLabelStyle}>{sidebarCoverageLabel}</div>
                  <div style={{ marginTop: '7px', fontSize: '15.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
                    {sidebarCoverageValue}
                  </div>
                </div>
                <div>
                  <div style={sidebarLabelStyle}>{sidebarHoursLabel}</div>
                  <div style={{ marginTop: '7px', fontSize: '15.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
                    {sidebarHoursValue}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #e4e7eb', background: '#fff', padding: '30px 28px 32px' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '16.5px', color: '#0b1c33' }}>
                {stepsHeading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb', marginTop: '18px' }}>
                {steps.map(step => (
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

            <div style={{ border: '1px solid #e4e7eb', background: '#fff', padding: '26px 28px 28px' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '16.5px', color: '#0b1c33' }}>
                {contactFallbackHeading}
              </div>
              <p style={{ margin: '10px 0 18px', fontSize: '14.5px', lineHeight: 1.6, color: '#5a626c' }}>
                {contactFallbackBody}
              </p>
              <Link
                href={contactFallbackHref}
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
                {contactFallbackLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
