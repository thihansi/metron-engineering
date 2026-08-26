import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Capability } from '@/types'

interface CapabilitiesSectionProps {
  sectionNo: string
  sectionTitle: string
  subheading: string
  capabilities: Capability[]
}

export function CapabilitiesSection({ sectionNo, sectionTitle, subheading, capabilities }: CapabilitiesSectionProps) {
  return (
    <section id="services" className="mtr-section" style={{ position: 'relative', background: '#f5f7f9', borderTop: '1px solid #e4e7eb', borderBottom: '1px solid #e4e7eb' }}>
      <div className="mtr-wrap">
        <RevealWrapper>
          <div className="mtr-row-between" style={{ marginBottom: '64px' }}>
            <div>
              <SectionLabel no={sectionNo} title={sectionTitle} />
              <h2 style={{ margin: 0, maxWidth: '640px', fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>
                {subheading}
              </h2>
            </div>
            <Link href="/services" className="mtr-arrow-link" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '15px', color: '#0b1c33', whiteSpace: 'nowrap', paddingBottom: '8px', borderBottom: '1px solid #cfd5dc' }}>
              All services ⟶
            </Link>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <div className="mtr-4col" style={{ gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb' }}>
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                data-reveal-item
                className="mtr-card-cap"
                style={{ position: 'relative', overflow: 'hidden', background: '#fff', padding: '34px 30px 38px', minHeight: '250px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', top: '-18px', right: '14px', fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: '92px', lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px rgba(11,28,51,0.09)', pointerEvents: 'none' }}>
                  {cap.no}
                </div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em', color: '#0b1c33', transition: 'color 420ms ease' }}>
                  {cap.title}
                </h3>
                <p style={{ margin: '14px 0 0', fontSize: '14.5px', lineHeight: 1.62, color: '#5a626c', transition: 'color 420ms ease' }}>
                  {cap.body}
                </p>
                <span style={{ marginTop: 'auto', paddingTop: '22px', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: '#8b929b' }}>
                  {cap.tag}
                </span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
