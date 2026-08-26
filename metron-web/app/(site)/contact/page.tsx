import { getPayload } from '@/lib/payload'
import { ContactForm } from '@/components/home/ContactForm'
import { InnerHero } from '@/components/ui/InnerHero'
import Link from 'next/link'

export default async function ContactPage() {
  let heroHeading = ''
  let heroBody = ''
  let formSectionTitle = ''
  let formSubheading = ''
  let successMessage = ''
  let email = ''
  let phone = ''
  let address = ''

  try {
    const payload = await getPayload()
    const [pg, settings] = await Promise.all([
      payload.findGlobal({ slug: 'contact-page' }),
      payload.findGlobal({ slug: 'site-settings' }),
    ])
    const p = pg as Record<string, string>
    heroHeading = p.heroHeading ?? ''
    heroBody = p.heroBody ?? ''
    formSectionTitle = p.formSectionTitle ?? ''
    formSubheading = p.formSubheading ?? ''
    successMessage = p.formSuccessMessage ?? ''
    const s = settings as Record<string, string>
    email = s.email ?? ''
    phone = s.phone ?? ''
    address = s.address ?? ''
  } catch { /* CMS unavailable */ }

  const telHref = `tel:${phone.replace(/\s/g, '')}`
  const mailHref = `mailto:${email}`
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  const routingRows = [
    { area: 'New work and quotes', detail: 'Scope, drawings, programme and fees', href: '/quote', label: 'Quote form ⟶', internal: true },
    { area: 'Metron Specials products', detail: 'Availability, specifications and pricing', href: '/products', label: 'View range ⟶', internal: true },
    { area: 'Live projects', detail: 'Site queries, revisions and documentation', href: mailHref, label: 'Email us ⟶', internal: false },
    { area: 'Careers', detail: 'Engineers and detailers — send a CV any time', href: mailHref, label: 'Email us ⟶', internal: false },
  ]

  const detailsCells = [
    { label: 'Phone', value: phone, note: 'Mon – Fri, 7:30 am – 5:00 pm AWST' },
    { label: 'Email', value: email, note: 'Replies within one business day' },
    { label: 'Office', value: 'Shelley, Western Australia', note: 'Visits by appointment' },
    { label: 'Coverage', value: 'Australia-wide', note: 'Remote and on-site engineering support' },
  ]

  const headingStyle: React.CSSProperties = {
    margin: 0,
    fontFamily: 'var(--font-archivo)',
    fontWeight: 700,
    fontSize: 'clamp(24px,2.4vw,32px)',
    lineHeight: 1.15,
    letterSpacing: '-0.026em',
    color: '#0b1c33',
  }

  const subStyle: React.CSSProperties = {
    margin: '14px 0 30px',
    fontSize: '15.5px',
    lineHeight: 1.66,
    color: '#5a626c',
  }

  return (
    <>
      <InnerHero
        badgeLeft="Contact"
        badgeRight="Shelley, Western Australia"
        heading={heroHeading}
        body={heroBody}
        bodyMaxWidth={620}
        showOrb
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          <a
            href={telHref}
            className="mtr-btn-light"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '54px',
              padding: '0 30px',
              background: '#fff',
              color: '#0b1c33',
              fontFamily: 'var(--font-archivo)',
              fontWeight: 700,
              fontSize: '15px',
              clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
            }}
          >
            {phone}
          </a>
          <Link
            href="/quote"
            className="mtr-btn-ghost"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '54px',
              padding: '0 28px',
              border: '1px solid rgba(255,255,255,0.34)',
              color: '#fff',
              fontFamily: 'var(--font-archivo)',
              fontWeight: 600,
              fontSize: '15px',
            }}
          >
            Request a quote ⟶
          </Link>
        </div>
      </InnerHero>

      {/* 4-cell contact details bar */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap">
          <div
            className="mtr-4col"
            style={{ gap: '1px', background: '#e4e7eb', borderLeft: '1px solid #e4e7eb', borderRight: '1px solid #e4e7eb' }}
          >
            {detailsCells.map(cell => (
              <div
                key={cell.label}
                style={{ background: '#fff', padding: '38px 30px 40px', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7c848e' }}>
                  {cell.label}
                </span>
                <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '19px', lineHeight: 1.35, letterSpacing: '-0.015em', color: '#0b1c33' }}>
                  {cell.value}
                </span>
                <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#5a626c' }}>
                  {cell.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find us + Send a message */}
      <section style={{ background: '#f5f7f9', padding: '100px 0 110px', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap">
          <div
            className="mtr-2col"
            style={{ border: '1px solid #e4e7eb', background: '#e4e7eb', gap: '1px', alignItems: 'stretch' }}
          >
            {/* Find us */}
            <div className="mtr-contact-panel">
              <h2 style={headingStyle}>Find us</h2>
              <p style={subStyle}>
                Visits are by appointment. For a specific person or team, see the routing below.
              </p>

              <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid #e4e7eb' }}>
                <iframe
                  src={mapSrc}
                  title="Metron Engineering location"
                  style={{ display: 'block', width: '100%', aspectRatio: '16/10', border: 0 }}
                  loading="lazy"
                />
              </div>
              <div style={{ marginTop: '20px', fontSize: '14.5px', lineHeight: 1.6, color: '#5a626c' }}>
                {address}
              </div>

              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb' }}>
                {routingRows.map(row => (
                  <div
                    key={row.area}
                    className="mtr-route-row"
                    style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}
                  >
                    <div>
                      <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '15px', color: '#0b1c33' }}>
                        {row.area}
                      </div>
                      <div style={{ marginTop: '4px', fontSize: '13.5px', lineHeight: 1.5, color: '#5a626c' }}>
                        {row.detail}
                      </div>
                    </div>
                    {row.internal ? (
                      <Link href={row.href} className="mtr-route-link" style={{ flexShrink: 0, whiteSpace: 'nowrap', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '13px' }}>
                        {row.label}
                      </Link>
                    ) : (
                      <a href={row.href} className="mtr-route-link" style={{ flexShrink: 0, whiteSpace: 'nowrap', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '13px' }}>
                        {row.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Send a message */}
            <div id="message" className="mtr-contact-panel">
              <h2 style={headingStyle}>{formSectionTitle}</h2>
              <p style={subStyle}>
                {formSubheading}{' '}Requesting a price? Use the{' '}
                <Link href="/quote" style={{ color: '#2e76c2', fontWeight: 600 }}>quote form</Link>
                {' '}instead so nothing gets missed.
              </p>
              <ContactForm successMessage={successMessage} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Have a scope ready? */}
      <section style={{ position: 'relative', background: '#0b1c33', overflow: 'hidden', padding: '96px 0 100px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)',
          backgroundSize: '96px 96px',
        }} />
        <div style={{
          position: 'absolute', bottom: '-200px', left: '-80px', width: '620px', height: '620px',
          borderRadius: '50%', background: 'radial-gradient(circle,rgba(46,118,194,0.3) 0%,transparent 70%)',
        }} />
        <div className="mtr-wrap" style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px' }}>
          <div>
            <h2 style={{ margin: 0, maxWidth: '640px', fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: 'clamp(28px,3.2vw,44px)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#fff' }}>
              Have a scope ready?
            </h2>
            <p style={{ margin: '18px 0 0', maxWidth: '560px', fontSize: '17px', lineHeight: 1.66, color: 'rgba(255,255,255,0.72)' }}>
              Send drawings, specifications or a short description and we will come back with an approach, programme and fee.
            </p>
          </div>
          <Link
            href="/quote"
            className="mtr-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '58px',
              padding: '0 34px',
              background: '#2e76c2',
              color: '#fff',
              fontFamily: 'var(--font-archivo)',
              fontWeight: 700,
              fontSize: '15.5px',
              clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
            }}
          >
            Get a quote ⟶
          </Link>
        </div>
      </section>
    </>
  )
}
