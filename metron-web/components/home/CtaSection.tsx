import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

interface CtaSectionProps {
  heading: string
  subtitle: string
  note?: string
  email?: string
}

export function CtaSection({
  heading,
  subtitle,
  note,
  email = 'sam@metronengineering.com.au',
}: CtaSectionProps) {
  return (
    <section id="contact" className="mtr-section" style={{ position: 'relative', background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '1100px', height: '1100px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(46,118,194,0.10) 0%,transparent 62%)' }} />
      <RevealWrapper style={{ position: 'relative', maxWidth: '1360px', margin: '0 auto', padding: '0 44px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '30px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2e76c2', display: 'block', animation: 'mtrPulse 2.4s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5a626c' }}>
            {subtitle}
          </span>
        </div>
        <h2 style={{ margin: '0 auto', maxWidth: '1000px', textAlign: 'center', fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1.02, letterSpacing: '-0.035em', color: '#0b1c33', textWrap: 'balance' as const }}>
          {heading}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '48px' }}>
          <Link
            href="/contact"
            className="mtr-cta-btn"
            style={{ display: 'inline-flex', alignItems: 'center', height: '60px', padding: '0 40px', background: '#0b1c33', color: '#fff', fontFamily: 'var(--font-archivo)', fontSize: '16px', fontWeight: 700, clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 18px) 100%,0 100%)' }}
          >
            Start an enquiry
          </Link>
          <a
            href={`mailto:${email}`}
            className="mtr-btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', height: '60px', padding: '0 34px', border: '1px solid #cfd5dc', color: '#0b1c33', fontFamily: 'var(--font-archivo)', fontSize: '16px', fontWeight: 600 }}
          >
            {email}
          </a>
        </div>
        {note && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '44px', marginTop: '56px', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: '#8b929b', flexWrap: 'wrap' }}>
            <span>{note}</span>
            <span style={{ color: '#2e76c2' }}>◆</span>
            <span>Australia-wide support</span>
            <span style={{ color: '#2e76c2' }}>◆</span>
            <span>AS/NZS compliant documentation</span>
          </div>
        )}
      </RevealWrapper>
    </section>
  )
}
