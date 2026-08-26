import { getPayload } from '@/lib/payload'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { InnerHero } from '@/components/ui/InnerHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CtaSection } from '@/components/home/CtaSection'

export default async function ServicesPage() {
  let services: Record<string, string | number | { no: string; title: string; body: string }[]> = {}
  let capabilities: { id: string; no: string; title: string; body: string; tag: string; order: number }[] = []
  let tools: { id: string; name: string; use: string; order: number }[] = []

  try {
    const payload = await getPayload()
    const [pg, capsRes, toolsRes] = await Promise.all([
      payload.findGlobal({ slug: 'services-page' }),
      payload.find({ collection: 'capabilities', sort: 'order', limit: 8 }),
      payload.find({ collection: 'tools', sort: 'order', limit: 12 }),
    ])
    services = pg as typeof services
    capabilities = capsRes.docs as typeof capabilities
    tools = toolsRes.docs as typeof tools
  } catch { /* defaults */ }

  const processSteps = (services.processSteps as { no: string; title: string; body: string }[] | undefined) ?? []

  return (
    <>
      <InnerHero
        label={(services.heroLabel as string) ?? ''}
        heading={(services.heroHeading as string) ?? ''}
        body={(services.heroBody as string) ?? ''}
        minHeight="50vh"
        bodyMaxWidth={640}
      />

      {/* Capabilities grid */}
      <section className="mtr-section" style={{ background: '#f5f7f9', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap">
          <RevealWrapper style={{ marginBottom: '56px' }}>
            <SectionLabel no={(services.capsSectionNo as string) ?? ''} title={(services.capsSectionTitle as string) ?? ''} />
            <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', color: '#5a626c' }}>
              {(services.capsSubheading as string) ?? ''}
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={60}>
            <div className="mtr-4col" style={{ gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb' }}>
              {capabilities.map((cap) => (
                <div key={cap.id} data-reveal-item className="mtr-card-cap" style={{ position: 'relative', overflow: 'hidden', background: '#fff', padding: '34px 30px 38px', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'absolute', top: '-18px', right: '14px', fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: '92px', lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px rgba(11,28,51,0.09)' }}>{cap.no}</div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em', color: '#0b1c33' }}>{cap.title}</h3>
                  <p style={{ margin: '14px 0 0', fontSize: '14.5px', lineHeight: 1.62, color: '#5a626c' }}>{cap.body}</p>
                  <span style={{ marginTop: 'auto', paddingTop: '22px', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: '#8b929b' }}>{cap.tag}</span>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Process */}
      <section className="mtr-section" style={{ background: '#fff', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap">
          <RevealWrapper style={{ marginBottom: '56px' }}>
            <SectionLabel no={(services.processSectionNo as string) ?? ''} title={(services.processSectionTitle as string) ?? ''} />
            <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', color: '#5a626c' }}>
              {(services.processSubheading as string) ?? ''}
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={60}>
            <div className="mtr-2col" style={{ gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb' }}>
              {processSteps.map((step) => (
                <div key={step.no} data-reveal-item style={{ background: '#fff', padding: '40px 36px 44px' }}>
                  <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2e76c2', marginBottom: '16px' }}>{step.no}</div>
                  <h3 style={{ margin: '0 0 14px', fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '22px', color: '#0b1c33' }}>{step.title}</h3>
                  <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.68, color: '#5a626c' }}>{step.body}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Tools */}
      <section className="mtr-section" style={{ background: '#f5f7f9', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap">
          <RevealWrapper style={{ marginBottom: '56px' }}>
            <SectionLabel no={(services.toolsSectionNo as string) ?? ''} title={(services.toolsSectionTitle as string) ?? ''} />
            <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', color: '#5a626c' }}>
              {(services.toolsSubheading as string) ?? ''}
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={60}>
            <div className="mtr-3col" style={{ gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb' }}>
              {tools.map((t) => (
                <div key={t.id} data-reveal-item className="mtr-tool-row" style={{ padding: '24px 26px 28px' }}>
                  <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '16px', color: '#0b1c33' }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#8b929b', marginTop: '6px' }}>{t.use}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      <CtaSection
        heading={(services.ctaHeading as string) ?? ''}
        subtitle={(services.ctaSubtitle as string) ?? ''}
      />
    </>
  )
}
