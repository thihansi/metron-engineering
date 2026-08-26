interface SectionLabelProps {
  no: string
  title: string
  dark?: boolean
}

export function SectionLabel({ no, title, dark = false }: SectionLabelProps) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', marginBottom: '22px' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          border: dark ? '1px solid rgba(127,196,232,0.4)' : '1px solid rgba(46,118,194,0.3)',
          color: dark ? '#7fc4e8' : '#2e76c2',
          fontFamily: 'var(--font-archivo)',
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: '0.02em',
        }}
      >
        {no}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-archivo)',
          fontWeight: 700,
          fontSize: '26px',
          letterSpacing: '-0.02em',
          color: dark ? '#fff' : '#0b1c33',
        }}
      >
        {title}
      </span>
    </div>
  )
}
