'use client'

import { useEffect, useState, type CSSProperties, type FormEvent } from 'react'
import Link from 'next/link'

export type CmsProduct = {
  id: string
  code: string
  title: string
  category: string
  short: string
  long?: string | null
  imageUrl?: string | null
  image?: { url?: string | null } | null
  gallery?: { url: string }[] | null
  specs?: { k: string; v: string }[] | null
  options?: { option: string }[] | null
}

export type ProductsDrawerProps = {
  products: CmsProduct[]
  ctaHeading: string
  ctaBody: string
  ctaButtonLabel: string
  ctaEmailLabel: string
  contactEmail: string
  assurances: { title: string; body: string }[]
}

function chipStyle(on: boolean): CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    height: '40px',
    padding: '0 20px',
    border: `1px solid ${on ? '#0b1c33' : '#cfd5dc'}`,
    background: on ? '#0b1c33' : '#fff',
    color: on ? '#fff' : '#26303b',
    fontFamily: 'var(--font-archivo)',
    fontWeight: 600,
    fontSize: '13.5px',
    cursor: 'pointer',
    transition: 'background 260ms ease, border-color 260ms ease, color 260ms ease',
  }
}

const inputStyle: CSSProperties = {
  height: '46px',
  padding: '0 14px',
  border: '1px solid #cfd5dc',
  background: '#fff',
  fontFamily: 'var(--font-sans)',
  fontSize: '14.5px',
  color: '#16191e',
  outline: 'none',
  width: '100%',
}

export function ProductsDrawer({
  products,
  ctaHeading,
  ctaBody,
  ctaButtonLabel,
  ctaEmailLabel,
  contactEmail,
  assurances,
}: ProductsDrawerProps) {
  const catalogue = products.map((p) => ({
    id: p.id,
    code: p.code,
    title: p.title,
    category: p.category,
    short: p.short,
    long: p.long ?? '',
    img: p.image?.url ?? p.imageUrl ?? '',
    gallery: (p.gallery ?? []).map((g) => g.url),
    specs: (p.specs ?? []).map((s) => ({ k: s.k, v: s.v })),
    options: (p.options ?? []).map((o) => o.option),
  }))

  const CATEGORIES = ['All', ...[...new Set(catalogue.map((p) => p.category).filter(Boolean))]]

  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const q = query.trim().toLowerCase()
  const list = catalogue.filter(
    (p) =>
      (filter === 'All' || p.category === filter) &&
      (!q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)),
  )

  const active = openId ? (catalogue.find((p) => p.id === openId) ?? null) : null
  const isOpen = Boolean(active)

  const close = () => {
    setOpenId(null)
    setSent(false)
  }
  const open = (id: string) => {
    setOpenId(id)
    setSent(false)
  }

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  const onEnquire = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!active) return
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '')
    const company = String(fd.get('company') || '')
    const email = String(fd.get('email') || '')
    const phone = String(fd.get('phone') || '')
    const notes = String(fd.get('notes') || '')
    const subject = encodeURIComponent(`Enquiry: ${active.title} (${active.code})`)
    const body = encodeURIComponent(
      [`Product: ${active.title} (${active.code})`, `Name: ${name}`, `Company: ${company}`, `Email: ${email}`, `Phone: ${phone}`, '', notes].join(
        '\n',
      ),
    )
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section id="catalogue" style={{ background: '#f5f7f9', padding: '56px 0 120px', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap">
          {/* Sticky search + filters */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              padding: '22px 0 26px',
              position: 'sticky',
              top: '82px',
              background: '#f5f7f9',
              zIndex: 40,
              borderBottom: '1px solid #e4e7eb',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
              <div style={{ position: 'relative' }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="7" stroke="#7c848e" strokeWidth="2" />
                  <line x1="16.4" y1="16.4" x2="21" y2="21" stroke="#7c848e" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products"
                  className="mtr-product-search"
                  aria-label="Search products"
                />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CATEGORIES.map((c) => (
                  <button key={c} type="button" onClick={() => setFilter(c)} style={chipStyle(c === filter)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#7c848e' }}>
              {list.length} of {catalogue.length} products
            </span>
          </div>

          {list.length === 0 && (
            <div style={{ padding: '80px 0', textAlign: 'center', fontSize: '15.5px', color: '#7c848e' }}>
              No products match &quot;{query}&quot;. Try a different search or category.
            </div>
          )}

          <div className="mtr-3col" style={{ gap: '24px', marginTop: '36px' }}>
            {list.map((p) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                onClick={() => open(p.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    open(p.id)
                  }
                }}
                className="mtr-card-product-page"
                style={{
                  position: 'relative',
                  background: '#fff',
                  border: '1px solid #e4e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', background: '#eef1f4' }}>
                  {p.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.img} alt={p.title} className="mtr-img-product-page" />
                  ) : null}
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 600,
                      fontSize: '11px',
                      letterSpacing: '0.045em',
                      color: '#0b1c33',
                      background: 'rgba(255,255,255,0.94)',
                      padding: '5px 9px',
                    }}
                  >
                    {p.code}
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 600,
                      fontSize: '11px',
                      letterSpacing: '0.045em',
                      color: '#fff',
                      background: 'rgba(11,28,51,0.78)',
                      padding: '5px 9px',
                    }}
                  >
                    {p.category}
                  </span>
                </div>
                <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: '19px',
                      lineHeight: 1.26,
                      letterSpacing: '-0.015em',
                      color: '#0b1c33',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ margin: '11px 0 20px', fontSize: '14px', lineHeight: 1.6, color: '#5a626c', flex: 1 }}>
                    {p.short}
                  </p>
                  <span className="mtr-product-view-btn">View details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom build CTA */}
      <section style={{ background: '#fff', padding: '110px 0' }}>
        <div className="mtr-wrap mtr-products-cta">
          <div>
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--font-archivo)',
                fontWeight: 700,
                fontSize: 'clamp(28px,2.6vw,38px)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0b1c33',
                textWrap: 'balance',
              }}
            >
              {ctaHeading}
            </h2>
            <p style={{ margin: '20px 0 0', maxWidth: '520px', fontSize: '17px', lineHeight: 1.68, color: '#5a626c' }}>
              {ctaBody}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '34px' }}>
              <Link
                href="/contact"
                className="mtr-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '54px',
                  padding: '0 32px',
                  background: '#0b1c33',
                  color: '#fff',
                  fontFamily: 'var(--font-archivo)',
                  fontSize: '15.5px',
                  fontWeight: 700,
                  clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
                }}
              >
                {ctaButtonLabel}
              </Link>
              <a
                href={`mailto:${contactEmail}`}
                className="mtr-product-email-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '54px',
                  padding: '0 28px',
                  border: '1px solid #cfd5dc',
                  color: '#0b1c33',
                  fontFamily: 'var(--font-archivo)',
                  fontSize: '15.5px',
                  fontWeight: 600,
                }}
              >
                {ctaEmailLabel}
              </a>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: '#e4e7eb',
              border: '1px solid #e4e7eb',
            }}
          >
            {assurances.map((a) => (
              <div key={a.title} style={{ background: '#fff', padding: '30px 26px 32px' }}>
                <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '17px', color: '#0b1c33' }}>
                  {a.title}
                </div>
                <p style={{ margin: '10px 0 0', fontSize: '14px', lineHeight: 1.62, color: '#5a626c' }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail drawer */}
      {active && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
          <div
            onClick={close}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(9,26,47,0.62)',
              backdropFilter: 'blur(3px)',
              animation: 'mtrVeil 300ms ease both',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: 'min(720px,94vw)',
              height: '100%',
              background: '#fff',
              overflowY: 'auto',
              boxShadow: '-30px 0 80px rgba(9,26,47,0.3)',
              animation: 'mtrPanel 420ms cubic-bezier(.16,1,.3,1) both',
            }}
          >
            <div
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                padding: '20px 32px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #e4e7eb',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#7c848e',
                }}
              >
                {active.code} — {active.category}
              </span>
              <button type="button" onClick={close} className="mtr-drawer-close" style={drawerCloseStyle}>
                ✕
              </button>
            </div>

            <div style={{ aspectRatio: '16/9', background: '#eef1f4', overflow: 'hidden' }}>
              {active.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={active.img}
                  alt={active.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0) contrast(1.04)' }}
                />
              ) : null}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: '#e4e7eb' }}>
              {active.gallery.map((g, i) => (
                <div key={`${active.id}-g-${i}`} style={{ aspectRatio: '4/3', background: '#eef1f4', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g} alt="" className="mtr-product-gallery-img" />
                </div>
              ))}
            </div>

            <div style={{ padding: '38px 32px 44px' }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#0b1c33',
                }}
              >
                {active.title}
              </h2>
              <p style={{ margin: '18px 0 0', fontSize: '16.5px', lineHeight: 1.7, color: '#5a626c' }}>{active.long}</p>

              <div style={{ marginTop: '34px' }}>
                <div style={sectionLabelStyle}>Specifications</div>
                <div style={{ border: '1px solid #e4e7eb' }}>
                  {active.specs.map((s, i) => (
                    <div
                      key={`${s.k}-${i}`}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 1fr',
                        gap: '20px',
                        padding: '14px 18px',
                        borderBottom: i < active.specs.length - 1 ? '1px solid #eceef1' : 'none',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '13.5px', color: '#7c848e' }}>
                        {s.k}
                      </span>
                      <span style={{ fontSize: '14.5px', color: '#26303b' }}>{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '34px' }}>
                <div style={sectionLabelStyle}>Options</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {active.options.map((o) => (
                    <span
                      key={o}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        height: '32px',
                        padding: '0 13px',
                        border: '1px solid #cfd5dc',
                        fontSize: '13.5px',
                        color: '#26303b',
                        background: '#f9fafb',
                      }}
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              <form
                onSubmit={onEnquire}
                style={{ marginTop: '40px', padding: '30px 28px 32px', background: '#f5f7f9', border: '1px solid #e4e7eb' }}
              >
                <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '19px', color: '#0b1c33' }}>
                  Enquire about {active.title}
                </div>
                <p style={{ margin: '8px 0 22px', fontSize: '14.5px', lineHeight: 1.6, color: '#5a626c' }}>
                  Tell us quantities, dimensions and site conditions. We respond within two business days.
                </p>
                <div className="mtr-product-enquire-grid">
                  <input name="name" type="text" placeholder="Name" required style={inputStyle} className="mtr-focus-input" />
                  <input name="company" type="text" placeholder="Company" style={inputStyle} className="mtr-focus-input" />
                  <input name="email" type="email" placeholder="Email" required style={inputStyle} className="mtr-focus-input" />
                  <input name="phone" type="tel" placeholder="Phone" style={inputStyle} className="mtr-focus-input" />
                </div>
                <textarea
                  name="notes"
                  placeholder="Quantity, dimensions, site and any specification notes"
                  className="mtr-focus-input"
                  style={{
                    marginTop: '12px',
                    width: '100%',
                    minHeight: '110px',
                    padding: '13px 14px',
                    border: '1px solid #cfd5dc',
                    background: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    color: '#16191e',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
                <button
                  type="submit"
                  className="mtr-cta-btn"
                  style={{
                    marginTop: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    height: '52px',
                    padding: '0 30px',
                    background: '#0b1c33',
                    color: '#fff',
                    border: 'none',
                    fontFamily: 'var(--font-archivo)',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
                  }}
                >
                  {sent ? 'Opening mail…' : 'Send enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const sectionLabelStyle: CSSProperties = {
  fontFamily: 'var(--font-archivo)',
  fontWeight: 700,
  fontSize: '13px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#0b1c33',
  marginBottom: '16px',
}

const drawerCloseStyle: CSSProperties = {
  width: '38px',
  height: '38px',
  border: '1px solid #cfd5dc',
  background: '#fff',
  color: '#0b1c33',
  fontSize: '17px',
  cursor: 'pointer',
}
