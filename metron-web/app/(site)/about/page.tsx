import type { Metadata } from 'next'
import { getPayload } from '@/lib/payload'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { InnerHero } from '@/components/ui/InnerHero'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { SectionLabel } from '@/components/ui/SectionLabel'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Metron Engineering Services',
  description: 'Perth-based structural, mechanical and civil engineering firm with experience in mining, industrial, infrastructure and commercial sectors.',
}

function parseStat(raw: string | undefined | null, label: string) {
  const s = raw?.trim() || '0'
  const m = s.match(/^(\d+)(.*)$/)
  return {
    n: m ? parseInt(m[1], 10) : 0,
    suffix: m ? m[2] : '',
    label,
  }
}

export default async function AboutPage() {
  let heroLabel = ''
  let heroBadgeRight = ''
  let heroHeading = ''
  let heroBody = ''
  let introSectionNo = ''
  let introSectionTitle = ''
  let introSubheading = ''
  let introBody1 = ''
  let introBody2 = ''
  let introImageUrl = ''
  let stats = [
    { n: 0, suffix: '', label: '' },
    { n: 0, suffix: '', label: '' },
    { n: 0, suffix: '', label: '' },
  ]
  let capsNo = ''
  let capsTitle = ''
  let capsSub = ''
  let indsNo = ''
  let indsTitle = ''
  let indsSub = ''
  let indsBody = ''
  let toolsNo = ''
  let toolsTitle = ''
  let toolsSub = ''
  let toolsBody = ''
  let stdNo = ''
  let stdTitle = ''
  let stdSub = ''
  let stdNote = ''
  let standards: { code: string; name: string }[] = []
  let prodNo = ''
  let prodTitle = ''
  let prodSub = ''
  let prodBody1 = ''
  let prodBody2 = ''
  let prodCta = ''
  let prodImageUrl = ''
  let ctaEyebrow = 'Final Call to Action'
  let ctaHeading = 'Have a project in mind?'
  let ctaBody =
    'Talk to Metron Engineering about your engineering, design, drafting or fabrication requirements. Whether you need support with an initial concept, detailed engineering, fabrication documentation or a complete engineered solution, our team can help move your project forward.'
  let ctaPrimaryLabel = 'Discuss Your Project'
  let ctaPrimaryHref = '/quote'
  let ctaSecondaryLabel = 'View Our Projects'
  let ctaSecondaryHref = '/projects'
  let capabilities: { no: string; title: string; body: string }[] = []
  let industries: { no: string; title: string; body: string; img: string }[] = []
  let tools: { name: string; use: string }[] = []

  try {
    const payload = await getPayload()
    const [about, capsRes, indsRes, toolsRes] = await Promise.all([
      payload.findGlobal({ slug: 'about-page' }),
      payload.find({ collection: 'capabilities', sort: 'order', limit: 20 }),
      payload.find({ collection: 'industries', sort: 'order', limit: 20 }),
      payload.find({ collection: 'tools', sort: 'order', limit: 20 }),
    ])
    const a = about as Record<string, unknown>
    const str = (k: string) => (typeof a[k] === 'string' ? (a[k] as string) : '')

    heroLabel = str('heroLabel')
    heroBadgeRight = str('heroBadgeRight')
    heroHeading = str('heroHeading')
    heroBody = str('heroBody')
    introSectionNo = str('introSectionNo')
    introSectionTitle = str('introSectionTitle')
    introSubheading = str('introSubheading')
    introBody1 = str('introBody1')
    introBody2 = str('introBody2')
    introImageUrl = str('introImageUrl')
    stats = [
      parseStat(str('stat1Number'), str('stat1Label')),
      parseStat(str('stat2Number'), str('stat2Label')),
      parseStat(str('stat3Number'), str('stat3Label')),
    ]
    capsNo = str('capabilitiesSectionNo')
    capsTitle = str('capabilitiesSectionTitle')
    capsSub = str('capabilitiesSubheading')
    indsNo = str('industriesSectionNo')
    indsTitle = str('industriesSectionTitle')
    indsSub = str('industriesSubheading')
    indsBody = str('industriesBody')
    toolsNo = str('toolsSectionNo')
    toolsTitle = str('toolsSectionTitle')
    toolsSub = str('toolsSubheading')
    toolsBody = str('toolsBody')
    stdNo = str('standardsSectionNo')
    stdTitle = str('standardsSectionTitle')
    stdSub = str('standardsSubheading')
    stdNote = str('standardsNote')
    standards = Array.isArray(a.standardsList)
      ? (a.standardsList as { code?: string; description?: string }[]).map((s) => ({
          code: s.code ?? '',
          name: s.description ?? '',
        }))
      : []
    prodNo = str('productCtaSectionNo')
    prodTitle = str('productCtaHeading')
    prodSub = str('productCtaSubheading')
    prodBody1 = str('productCtaBody')
    prodBody2 = str('productCtaBody2')
    prodCta = str('productCtaLabel')
    prodImageUrl = str('productCtaImageUrl')
    ctaEyebrow = str('ctaEyebrow') || ctaEyebrow
    ctaHeading = str('ctaHeading') || ctaHeading
    ctaBody = str('ctaBody') || ctaBody
    ctaPrimaryLabel = str('ctaPrimaryLabel') || ctaPrimaryLabel
    ctaPrimaryHref = str('ctaPrimaryHref') || ctaPrimaryHref
    ctaSecondaryLabel = str('ctaSecondaryLabel') || ctaSecondaryLabel
    ctaSecondaryHref = str('ctaSecondaryHref') || ctaSecondaryHref

    capabilities = capsRes.docs.map((c) => ({
      no: c.no,
      title: c.title,
      body: c.body,
    }))
    industries = indsRes.docs.map((ind) => {
      const img =
        (typeof ind.image === 'object' && ind.image && 'url' in ind.image
          ? (ind.image as { url?: string }).url
          : null) ??
        ind.imageUrl ??
        ''
      return { no: ind.no, title: ind.title, body: ind.body, img }
    })
    tools = toolsRes.docs.map((t) => ({ name: t.name, use: t.use }))
  } catch {
    // CMS unavailable
  }

  return (
    <>
      <InnerHero
        compact
        showOrb
        badgeLeft={heroLabel}
        badgeRight={heroBadgeRight}
        heading={heroHeading}
        body={heroBody}
        bodyMaxWidth={640}
      />

      <section style={{ background: '#fff', padding: '120px 0' }}>
        <RevealWrapper>
          <div className="mtr-wrap mtr-about-intro">
            <div>
              <SectionLabel no={introSectionNo} title={introSectionTitle} />
              <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.6, color: '#5a626c' }}>{introSubheading}</p>
              <div
                style={{
                  marginTop: '38px',
                  clipPath: 'polygon(0 0,100% 0,100% 100%,34px 100%,0 calc(100% - 34px))',
                  overflow: 'hidden',
                }}
              >
                {introImageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={introImageUrl}
                    alt=""
                    className="mtr-img-about"
                    style={{
                      display: 'block',
                      width: '100%',
                      aspectRatio: '5/4',
                      objectFit: 'cover',
                      filter: 'grayscale(0) contrast(1.05)',
                    }}
                  />
                ) : null}
              </div>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.7, color: '#26303b' }}>{introBody1}</p>
              <p style={{ margin: '22px 0 0', fontSize: '17px', lineHeight: 1.72, color: '#5a626c' }}>{introBody2}</p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3,1fr)',
                  gap: '1px',
                  background: '#e4e7eb',
                  border: '1px solid #e4e7eb',
                  marginTop: '44px',
                }}
              >
                {stats.map((s) => (
                  <div key={s.label || s.n} style={{ background: '#fff', padding: '26px 22px 28px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-archivo)',
                        fontWeight: 700,
                        fontSize: '36px',
                        letterSpacing: '-0.03em',
                        color: '#0b1c33',
                        lineHeight: 1,
                      }}
                    >
                      <AnimatedCounter target={s.n} suffix={s.suffix} />
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-archivo)',
                        fontWeight: 600,
                        fontSize: '12px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#7c848e',
                        marginTop: '12px',
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </section>

      <section style={{ background: '#fff', padding: '120px 0' }}>
        <div className="mtr-wrap">
          <RevealWrapper style={{ marginBottom: '48px' }}>
            <SectionLabel no={capsNo} title={capsTitle} />
            <p style={{ margin: 0, maxWidth: '640px', fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>
              {capsSub}
            </p>
          </RevealWrapper>
          <RevealWrapper>
            <div className="mtr-4col" style={{ gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb' }}>
              {capabilities.map((c) => (
                <div key={c.no + c.title} data-reveal-item className="mtr-about-cap">
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.05em',
                      color: '#2e76c2',
                      marginBottom: '14px',
                    }}
                  >
                    {c.no}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: '17px',
                      color: '#0b1c33',
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ margin: '10px 0 0', fontSize: '14px', lineHeight: 1.6, color: '#5a626c' }}>{c.body}</p>
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="mtr-arrow-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '34px',
                fontFamily: 'var(--font-archivo)',
                fontWeight: 600,
                fontSize: '15.5px',
                color: '#0b1c33',
                paddingBottom: '8px',
                borderBottom: '1px solid #cfd5dc',
              }}
            >
              Service detail ⟶
            </Link>
          </RevealWrapper>
        </div>
      </section>

      <section
        style={{
          background: '#f5f7f9',
          padding: '120px 0',
          borderTop: '1px solid #e4e7eb',
          borderBottom: '1px solid #e4e7eb',
        }}
      >
        <div className="mtr-wrap">
          <RevealWrapper style={{ marginBottom: '48px' }}>
            <SectionLabel no={indsNo} title={indsTitle} />
            <p style={{ margin: 0, maxWidth: '640px', fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>
              {indsSub}
            </p>
            <p style={{ margin: '14px 0 0', maxWidth: '640px', fontSize: '15.5px', lineHeight: 1.6, color: '#5a626c' }}>
              {indsBody}
            </p>
          </RevealWrapper>
          <RevealWrapper>
            <div className="mtr-3col" style={{ gap: '16px' }}>
              {industries.map((ind) => (
                <div
                  key={ind.no + ind.title}
                  data-reveal-item
                  className="mtr-card-industry mtr-about-industry"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#0b1c33',
                    aspectRatio: '3/4.2',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  {ind.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={ind.img} alt={ind.title} className="mtr-about-industry-img" />
                  ) : null}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top,rgba(9,26,47,0.95) 0%,rgba(9,26,47,0.42) 48%,rgba(9,26,47,0.08) 100%)',
                    }}
                  />
                  <div style={{ position: 'relative', padding: '26px 24px 28px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-archivo)',
                        fontWeight: 600,
                        fontSize: '11.5px',
                        letterSpacing: '0.045em',
                        color: '#7fc4e8',
                        marginBottom: '12px',
                      }}
                    >
                      {ind.no}
                    </div>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: 'var(--font-archivo)',
                        fontWeight: 700,
                        fontSize: '22px',
                        letterSpacing: '-0.02em',
                        color: '#fff',
                      }}
                    >
                      {ind.title}
                    </h3>
                    <p
                      style={{
                        margin: '11px 0 0',
                        height: '68px',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.74)',
                      }}
                    >
                      {ind.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '120px 0' }}>
        <div className="mtr-wrap mtr-about-tools">
          <RevealWrapper>
            <SectionLabel no={toolsNo} title={toolsTitle} />
            <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>{toolsSub}</p>
            <p style={{ margin: '14px 0 32px', maxWidth: '520px', fontSize: '15.5px', lineHeight: 1.6, color: '#5a626c' }}>
              {toolsBody}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: '#e4e7eb',
                border: '1px solid #e4e7eb',
              }}
            >
              {tools.map((t) => (
                <div key={t.name} data-reveal-item className="mtr-tool-row" style={{ padding: '22px' }}>
                  <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '15.5px', color: '#0b1c33' }}>
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 600,
                      fontSize: '11.5px',
                      letterSpacing: '0.045em',
                      textTransform: 'uppercase',
                      color: '#7c848e',
                      marginTop: '8px',
                    }}
                  >
                    {t.use}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <SectionLabel no={stdNo} title={stdTitle} />
            <p style={{ margin: '0 0 32px', fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>{stdSub}</p>
            <div style={{ border: '1px solid #e4e7eb' }}>
              {standards.map((s, i) => (
                <div
                  key={s.code}
                  data-reveal-item
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '170px 1fr',
                    gap: '20px',
                    padding: '16px 20px',
                    borderBottom: i < standards.length - 1 ? '1px solid #eceef1' : 'none',
                    background: '#fff',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '13.5px', color: '#2e76c2' }}>
                    {s.code}
                  </span>
                  <span style={{ fontSize: '14.5px', lineHeight: 1.55, color: '#26303b' }}>{s.name}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: '18px 0 0', fontSize: '14.5px', lineHeight: 1.6, color: '#7c848e' }}>{stdNote}</p>
          </RevealWrapper>
        </div>
      </section>

      <section
        style={{
          background: '#f5f7f9',
          padding: '120px 0',
          borderTop: '1px solid #e4e7eb',
          borderBottom: '1px solid #e4e7eb',
        }}
      >
        <RevealWrapper>
          <div className="mtr-wrap mtr-about-products">
            <div>
              <SectionLabel no={prodNo} title={prodTitle} />
              <p style={{ margin: 0, maxWidth: '520px', fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>
                {prodSub}
              </p>
              <p style={{ margin: '22px 0 0', maxWidth: '520px', fontSize: '17px', lineHeight: 1.72, color: '#5a626c' }}>
                {prodBody1}
              </p>
              <p style={{ margin: '16px 0 0', maxWidth: '520px', fontSize: '17px', lineHeight: 1.72, color: '#5a626c' }}>
                {prodBody2}
              </p>
              <Link
                href="/products"
                className="mtr-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '54px',
                  padding: '0 30px',
                  marginTop: '34px',
                  background: '#0b1c33',
                  color: '#fff',
                  fontFamily: 'var(--font-archivo)',
                  fontSize: '15px',
                  fontWeight: 700,
                  clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
                }}
              >
                {prodCta}
              </Link>
            </div>
            <div
              style={{
                clipPath: 'polygon(0 0,100% 0,100% 100%,34px 100%,0 calc(100% - 34px))',
                overflow: 'hidden',
              }}
            >
              {prodImageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={prodImageUrl}
                  alt={prodTitle}
                  className="mtr-about-prod-img"
                  style={{ display: 'block', width: '100%', aspectRatio: '5/4', objectFit: 'cover' }}
                />
              ) : null}
            </div>
          </div>
        </RevealWrapper>
      </section>

      <section style={{ position: 'relative', background: '#0b1c33', padding: '110px 0', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <RevealWrapper
          style={{ position: 'relative', maxWidth: '1360px', margin: '0 auto', padding: '0 44px', textAlign: 'center' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8fb4e0',
              marginBottom: '18px',
            }}
          >
            {ctaEyebrow}
          </div>
          <h2
            style={{
              margin: '0 auto',
              maxWidth: '820px',
              fontFamily: 'var(--font-archivo)',
              fontWeight: 800,
              fontSize: 'clamp(30px,3.6vw,50px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              color: '#fff',
              textWrap: 'balance',
            }}
          >
            {ctaHeading}
          </h2>
          <p
            style={{
              margin: '24px auto 0',
              maxWidth: '660px',
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            {ctaBody}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '38px' }}>
            <Link
              href={ctaPrimaryHref}
              className="mtr-btn-light"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '56px',
                padding: '0 34px',
                background: '#fff',
                color: '#0b1c33',
                fontFamily: 'var(--font-archivo)',
                fontSize: '15.5px',
                fontWeight: 700,
                clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
              }}
            >
              {ctaPrimaryLabel}
            </Link>
            <Link
              href={ctaSecondaryHref}
              className="mtr-btn-ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '56px',
                padding: '0 30px',
                border: '1px solid rgba(255,255,255,0.34)',
                color: '#fff',
                fontFamily: 'var(--font-archivo)',
                fontSize: '15.5px',
                fontWeight: 600,
              }}
            >
              {ctaSecondaryLabel}
            </Link>
          </div>
        </RevealWrapper>
      </section>
    </>
  )
}
