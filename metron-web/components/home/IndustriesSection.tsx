import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Industry } from '@/types'

interface IndustriesSectionProps {
  sectionNo: string
  sectionTitle: string
  subheading: string
  industries: Industry[]
}

export function IndustriesSection({ sectionNo, sectionTitle, subheading, industries }: IndustriesSectionProps) {
  return (
    <section className="mtr-section" style={{ background: '#fff' }}>
      <div className="mtr-wrap">
        <RevealWrapper style={{ marginBottom: '56px' }}>
          <SectionLabel no={sectionNo} title={sectionTitle} />
          <h2 style={{ margin: 0, maxWidth: '700px', fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>
            {subheading}
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <div className="mtr-4col" style={{ gap: '16px' }}>
            {industries.map((ind) => {
              const imgSrc = ind.image?.url ?? ind.imageUrl ?? ''
              return (
                <div
                  key={ind.id}
                  data-reveal-item
                  className="mtr-card-industry"
                  style={{ position: 'relative', overflow: 'hidden', background: '#0b1c33', aspectRatio: '3/4.2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
                >
                  {imgSrc && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imgSrc}
                      alt={ind.title}
                      className="mtr-img-industry"
                    />
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(9,26,47,0.95) 0%,rgba(9,26,47,0.42) 48%,rgba(9,26,47,0.08) 100%)' }} />
                  <div style={{ position: 'relative', padding: '28px 26px 30px' }}>
                    <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: '#7fc4e8', marginBottom: '12px' }}>
                      {ind.no}
                    </div>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '23px', letterSpacing: '-0.02em', color: '#fff' }}>
                      {ind.title}
                    </h3>
                    <p style={{ margin: '12px 0 0', height: '68px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.74)' }}>
                      {ind.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
