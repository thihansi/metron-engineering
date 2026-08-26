import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px', fontFamily: 'system-ui, sans-serif', color: '#fff' }}>
      <h1 style={{ fontSize: '4rem', margin: '0 0 8px', fontWeight: 700 }}>404</h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
        This admin page could not be found.
      </p>
      <Link
        href="/admin"
        style={{
          display: 'inline-block',
          padding: '12px 28px',
          background: '#2e76c2',
          color: '#fff',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Back to Admin
      </Link>
    </div>
  )
}
