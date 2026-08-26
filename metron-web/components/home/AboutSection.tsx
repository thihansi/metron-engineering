import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Tool } from '@/types'

interface AboutSectionProps {
  sectionNo: string
  sectionTitle: string
  subheading: string
  body1: string
  body2: string
  imageUrl: string
  linkLabel: string
  tools: Tool[]
}

export function AboutSection({ sectionNo, sectionTitle, subheading, body1, body2, imageUrl, linkLabel, tools }: AboutSectionProps) {
  return (
    <section id="about" className="mtr-section" style={{ position: 'relative', background: '#fff' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', backgroundImage: 'linear-gradient(90deg,#f3f5f7 1px,transparent 1px)', backgroundSize: '170px 100%', opacity: 0.8 }} />
      <div className="mtr-wrap mtr-about-grid" style={{ position: 'relative' }}>
        <RevealWrapper>
          <SectionLabel no={sectionNo} title={sectionTitle} />
          <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', lineHeight: 1.55, color: '#5a626c', textWrap: 'balance' as const }}>
            {subheading}
          </h2>
          <div style={{ marginTop: '38px', position: 'relative', clipPath: 'polygon(0 0,100% 0,100% 100%,34px 100%,0 calc(100% - 34px))' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt="Engineering work"
              className="mtr-img-about"
              style={{ display: 'block', width: '100%', aspectRatio: '5/4', objectFit: 'cover' }}
            />
          </div>
        </RevealWrapper>

        <RevealWrapper delay={120}>
          <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.66, color: '#26303b', textWrap: 'pretty' as const }}>{body1}</p>
          <p style={{ margin: '24px 0 0', fontSize: '17px', lineHeight: 1.72, color: '#5a626c', textWrap: 'pretty' as const }}>{body2}</p>

          {/* Tools grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb', marginTop: '44px' }}>
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="mtr-tool-row"
              >
                <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '15.5px', color: '#0b1c33' }}>{tool.name}</div>
                <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#8b929b', marginTop: '8px' }}>{tool.use}</div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mtr-arrow-link"
            style={{ marginTop: '36px', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '15.5px', color: '#0b1c33', paddingBottom: '8px', borderBottom: '1px solid #cfd5dc' }}
          >
            {linkLabel}<span>⟶</span>
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
