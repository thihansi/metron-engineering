import { getPayload } from '@/lib/payload'
import { ProjectsClient, type CmsProject } from '@/components/home/ProjectsClient'
import { InnerHero } from '@/components/ui/InnerHero'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import Link from 'next/link'

export default async function ProjectsPage() {
  let heroLabel = ''
  let heroBadgeRight = ''
  let heroHeading = ''
  let heroBody = ''
  let ctaHeading = ''
  let ctaButtonLabel = ''
  let projects: CmsProject[] = []

  try {
    const payload = await getPayload()
    const [pg, projsRes] = await Promise.all([
      payload.findGlobal({ slug: 'projects-page' }),
      payload.find({ collection: 'projects', sort: 'order', limit: 100 }),
    ])
    const p = pg as Record<string, string | null | undefined>
    heroLabel = p.heroLabel ?? ''
    heroBadgeRight = p.heroBadgeRight ?? ''
    heroHeading = p.heroHeading ?? ''
    heroBody = p.heroBody ?? ''
    ctaHeading = p.ctaHeading ?? ''
    ctaButtonLabel = p.ctaButtonLabel ?? ''
    projects = projsRes.docs as CmsProject[]
  } catch {
    // DB not ready — empty strings / arrays
  }

  return (
    <>
      <InnerHero
        compact
        showOrb
        orbAnimate={false}
        badgeLeft={heroLabel}
        badgeRight={heroBadgeRight}
        heading={heroHeading}
        body={heroBody}
        headingMaxWidth={880}
        bodyMaxWidth={640}
      />

      <ProjectsClient projects={projects} />

      {/* Bottom CTA — matches Metron Projects.dc.html */}
      <section
        style={{
          position: 'relative',
          background: '#0b1c33',
          padding: '110px 0',
          overflow: 'hidden',
        }}
      >
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
          <h2
            style={{
              margin: '0 auto',
              maxWidth: '800px',
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '38px' }}>
            <Link
              href="/contact"
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
              {ctaButtonLabel}
            </Link>
          </div>
        </RevealWrapper>
      </section>
    </>
  )
}
