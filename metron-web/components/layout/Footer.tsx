import Link from 'next/link'
import Image from 'next/image'

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Products', href: '/products' },
]

const DISCIPLINE_LINKS = [
  { label: 'Structural', href: '/services' },
  { label: 'Mechanical', href: '/services' },
  { label: 'FEA analysis', href: '/services' },
  { label: 'Steel detailing', href: '/services' },
]

interface FooterProps {
  email?: string
  address?: string
  footerBlurb?: string
  copyrightLine?: string
  footerNote?: string
}

export function Footer({
  email = 'sam@metronengineering.com.au',
  address = '11/24 Marjorie Avenue, Shelley WA 6148',
  footerBlurb = 'Perth based engineering, design, drafting and fabrication for projects across Australia.',
  copyrightLine = '© 2026 Metron Engineering Pty Ltd',
  footerNote = 'Designed and documented to AS/NZS standards',
}: FooterProps) {
  return (
    <footer style={{ background: '#091a2f', padding: '80px 0 40px' }}>
      <div className="mtr-wrap mtr-footer-cols">
        <div>
          <Image
            src="/logo-white.svg"
            alt="Metron Engineering"
            width={160}
            height={30}
            style={{ height: '30px', width: 'auto', display: 'block' }}
          />
          <p style={{ margin: '24px 0 0', maxWidth: '300px', fontSize: '14.5px', lineHeight: 1.68, color: 'rgba(255,255,255,0.6)' }}>
            {footerBlurb}
          </p>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: 'rgba(127,196,232,0.85)', marginBottom: '20px' }}>
            Company
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="mtr-footer-link" style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: 'rgba(127,196,232,0.85)', marginBottom: '20px' }}>
            Disciplines
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {DISCIPLINE_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="mtr-footer-link" style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11.5px', letterSpacing: '0.045em', textTransform: 'uppercase', color: 'rgba(127,196,232,0.85)', marginBottom: '20px' }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <a href={`mailto:${email}`} className="mtr-footer-link" style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>
              {email}
            </a>
            <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.72)' }}>{address}</span>
            <Link href="/quote" className="mtr-footer-link" style={{ fontSize: '14.5px', color: '#7fc4e8', fontWeight: 600 }}>
              Get a quote ⟶
            </Link>
          </div>
        </div>
      </div>

      <div
        className="mtr-footer-bottom"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '24px',
          fontFamily: 'var(--font-archivo)',
          fontWeight: 600,
          fontSize: '11.5px',
          letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.42)',
          flexWrap: 'wrap',
        }}
      >
        <span>{copyrightLine}</span>
        <span>{footerNote}</span>
      </div>
    </footer>
  )
}
