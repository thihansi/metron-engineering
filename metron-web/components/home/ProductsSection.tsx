import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Product } from '@/types'

interface ProductsSectionProps {
  sectionNo: string
  sectionTitle: string
  subheading: string
  products: Product[]
}

export function ProductsSection({ sectionNo, sectionTitle, subheading, products }: ProductsSectionProps) {
  return (
    <section id="products" className="mtr-section" style={{ position: 'relative', background: '#f5f7f9', borderTop: '1px solid #e4e7eb', borderBottom: '1px solid #e4e7eb' }}>
      <div className="mtr-wrap">
        <RevealWrapper>
          <div className="mtr-row-between" style={{ marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', marginBottom: '22px' }}>
                <SectionLabel no={sectionNo} title={sectionTitle} />
                <span style={{ display: 'inline-flex', alignItems: 'center', height: '24px', padding: '0 10px', background: '#2e76c2', color: '#fff', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Our own range
                </span>
              </div>
              <h2 style={{ margin: 0, maxWidth: '640px', fontFamily: 'var(--font-sans)', fontWeight: 450, fontSize: '19px', lineHeight: 1.55, color: '#5a626c' }}>
                {subheading}
              </h2>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <div className="mtr-4col" style={{ gap: '20px', marginTop: '44px' }}>
            {products.map((prod) => {
              const imgSrc = prod.image?.url ?? prod.imageUrl ?? ''
              return (
                <Link
                  key={prod.id}
                  href="/products"
                  data-reveal-item
                  className="mtr-card-product"
                  style={{ position: 'relative', background: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden', color: 'inherit', textDecoration: 'none' }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', background: '#eef1f4' }}>
                    {imgSrc && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imgSrc}
                        alt={prod.title}
                        className="mtr-img-product"
                      />
                    )}
                    <span style={{ position: 'absolute', top: '12px', left: '12px', fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.045em', color: '#0b1c33', background: 'rgba(255,255,255,0.94)', padding: '5px 9px' }}>
                      {prod.code}
                    </span>
                  </div>
                  <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '16.5px', lineHeight: 1.28, color: '#0b1c33' }}>
                      {prod.title}
                    </h3>
                    <p style={{ margin: '9px 0 16px', fontSize: '13.5px', lineHeight: 1.55, color: '#5a626c', flex: 1 }}>
                      {prod.short}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-archivo)', fontSize: '13.5px', fontWeight: 600, color: '#2e76c2' }}>
                      View product ⟶
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </RevealWrapper>

        <RevealWrapper delay={120} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '18px', marginTop: '52px' }}>
          <Link
            href="/products"
            className="mtr-cta-btn"
            style={{ display: 'inline-flex', alignItems: 'center', height: '56px', padding: '0 34px', background: '#0b1c33', color: '#fff', fontFamily: 'var(--font-archivo)', fontSize: '15.5px', fontWeight: 700, clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)' }}
          >
            View All Metron Products
          </Link>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', color: '#7c848e' }}>
            9 product lines — full specifications and enquiry on each
          </span>
        </RevealWrapper>
      </div>
    </section>
  )
}
