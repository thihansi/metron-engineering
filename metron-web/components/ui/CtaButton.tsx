import Link from 'next/link'

interface CtaButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'white'
  size?: 'md' | 'lg'
  className?: string
}

const sizeStyles = {
  md: { height: '44px', padding: '0 24px', fontSize: '14px' },
  lg: { height: '56px', padding: '0 34px', fontSize: '15.5px' },
}

const variantStyles = {
  primary: {
    background: '#2e76c2',
    color: '#fff',
  },
  outline: {
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.34)',
    backdropFilter: 'blur(6px)',
  },
  white: {
    background: '#fff',
    color: '#0b1c33',
  },
}

export function CtaButton({ href, children, variant = 'primary', size = 'md', className }: CtaButtonProps) {
  const { height, padding, fontSize } = sizeStyles[size]
  const variantStyle = variantStyles[variant]

  return (
    <Link
      href={href}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        height,
        padding,
        fontSize,
        fontWeight: 700,
        fontFamily: 'var(--font-archivo)',
        letterSpacing: '0.01em',
        clipPath: size === 'lg'
          ? 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)'
          : 'polygon(0 0,100% 0,100% 68%,calc(100% - 12px) 100%,0 100%)',
        transition: 'background 260ms ease, transform 260ms ease, box-shadow 260ms ease',
        ...variantStyle,
      }}
    >
      {children}
    </Link>
  )
}
