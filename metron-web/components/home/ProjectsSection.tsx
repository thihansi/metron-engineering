import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Project } from '@/types'

interface ProjectsSectionProps {
  sectionNo: string
  sectionTitle: string
  subheading: string
  projects: Project[]
}

export function ProjectsSection({ sectionNo, sectionTitle, subheading, projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mtr-section" style={{ position: 'relative', background: '#f5f7f9', borderTop: '1px solid #e4e7eb', borderBottom: '1px solid #e4e7eb' }}>
      <div className="mtr-wrap">
        <RevealWrapper>
          <div className="mtr-row-between" style={{ marginBottom: '56px' }}>
            <div>
              <SectionLabel no={sectionNo} title={sectionTitle} />
              <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>
                {subheading}
              </h2>
            </div>
            <Link href="/projects" className="mtr-arrow-link" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '15px', color: '#0b1c33', whiteSpace: 'nowrap', paddingBottom: '8px', borderBottom: '1px solid #cfd5dc' }}>
              All projects ⟶
            </Link>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <div className="mtr-3col" style={{ gap: '24px' }}>
            {projects.map((prj) => {
              const imgSrc = prj.image?.url ?? prj.imageUrl ?? ''
              const servicesStr = prj.services?.map((s) => s.service).join(' · ') ?? ''
              return (
                <div
                  key={prj.id}
                  data-reveal-item
                  className="mtr-card-project"
                  style={{ position: 'relative', background: '#fff', overflow: 'hidden' }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10', background: '#0b1c33' }}>
                    {imgSrc && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imgSrc}
                        alt={prj.title}
                        className="mtr-img-project"
                      />
                    )}
                    <span style={{ position: 'absolute', top: '16px', left: '16px', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.045em', textTransform: 'uppercase', color: '#fff', background: 'rgba(11,28,51,0.72)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 11px' }}>
                      {prj.industry}
                    </span>
                  </div>
                  <div style={{ padding: '28px 28px 32px' }}>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '20px', lineHeight: 1.26, letterSpacing: '-0.015em', color: '#0b1c33' }}>
                      {prj.title}
                    </h3>
                    <p style={{ margin: '14px 0 0', fontSize: '14.5px', lineHeight: 1.66, color: '#5a626c' }}>
                      {prj.summary}
                    </p>
                    <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #eceef1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: '#8b929b' }}>
                      <span>{servicesStr}</span>
                      <span style={{ color: '#2e76c2' }}>⟶</span>
                    </div>
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
