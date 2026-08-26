import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const REASONS = [
  {
    no: 'A',
    title: 'Analysis-led design',
    body: 'Load paths verified in FEA before detailing, so the model that goes to fabrication is the model that was checked.',
  },
  {
    no: 'B',
    title: 'Fabrication-aware detailing',
    body: 'Detailers who understand shop constraints reduce RFIs, rework and site fit-up issues.',
  },
  {
    no: 'C',
    title: 'Compliance as standard',
    body: 'Documentation aligned to AS/NZS codes, WA mining regulations and client QA systems.',
  },
  {
    no: 'D',
    title: 'Perth-based, nationally engaged',
    body: 'A local team with the mobility and systems to support projects anywhere in Australia.',
  },
]

interface WhySectionProps {
  sectionNo: string
  sectionTitle: string
  subheading: string
  body: string
  stat: number
  statSuffix: string
  statLabel: string
  imageUrl: string
}

export function WhySection({ sectionNo, sectionTitle, subheading, body, stat, statSuffix, statLabel, imageUrl }: WhySectionProps) {
  return (
    <section className="mtr-section" style={{ position: 'relative', background: '#0b1c33', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.16, filter: 'grayscale(1)' }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)', backgroundSize: '96px 96px' }} />
      <div style={{ position: 'absolute', bottom: '-160px', left: '-80px', width: '620px', height: '620px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(46,118,194,0.34) 0%,transparent 70%)' }} />

      <div className="mtr-wrap" style={{ position: 'relative' }}>
        <RevealWrapper className="mtr-why-grid">
          <div>
            <SectionLabel no={sectionNo} title={sectionTitle} dark />
            <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', textWrap: 'balance' as const }}>
              {subheading}
            </h2>
            <p style={{ margin: '26px 0 0', fontSize: '16.5px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
              {body}
            </p>
            <div style={{ marginTop: '44px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.16)' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '52px', letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>
                <AnimatedCounter target={stat} suffix={statSuffix} />
              </div>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: 'rgba(127,196,232,0.9)', marginTop: '12px' }}>
                {statLabel}
              </div>
            </div>
          </div>

          <div className="mtr-2col" style={{ gap: '1px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.12)' }}>
            {REASONS.map((r) => (
              <div
                key={r.no}
                className="mtr-reason-cell"
                style={{ background: 'rgba(11,28,51,0.55)', backdropFilter: 'blur(4px)', padding: '34px 30px 36px' }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', color: 'rgba(255,255,255,0.5)' }}>
                    {r.no}
                  </span>
                </div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '18.5px', lineHeight: 1.3, color: '#fff' }}>
                  {r.title}
                </h3>
                <p style={{ margin: '13px 0 0', fontSize: '14.5px', lineHeight: 1.66, color: 'rgba(255,255,255,0.68)' }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
