'use client'

import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'

export type CmsProject = {
  id: string
  title: string
  industry: string
  services?: { service: string }[] | null
  summary: string
  brief?: string | null
  work?: { item: string }[] | null
  outcome?: string | null
  facts?: { k: string; v: string }[] | null
  imageUrl?: string | null
  image?: { url?: string | null } | null
}

export type ProjectsClientProps = {
  projects: CmsProject[]
}

function projectServices(p: CmsProject): string[] {
  return (p.services ?? []).map((s) => s.service)
}

function serviceLabel(p: CmsProject): string {
  return projectServices(p).join(' · ')
}

function projectImage(p: CmsProject): string {
  return p.image?.url ?? p.imageUrl ?? ''
}

function chipStyle(on: boolean): CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    height: '38px',
    padding: '0 17px',
    border: `1px solid ${on ? '#0b1c33' : '#cfd5dc'}`,
    background: on ? '#0b1c33' : '#fff',
    color: on ? '#fff' : '#26303b',
    fontFamily: 'var(--font-archivo)',
    fontWeight: 600,
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'background 260ms ease, border-color 260ms ease, color 260ms ease',
  }
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [industry, setIndustry] = useState('All')
  const [service, setService] = useState('All')
  const [openIndex, setOpenIndex] = useState(-1)

  const industries = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.industry).filter(Boolean)))],
    [projects],
  )

  const services = useMemo(
    () => ['All', ...Array.from(new Set(projects.flatMap((p) => projectServices(p)).filter(Boolean)))],
    [projects],
  )

  const list = projects.filter(
    (p) =>
      (industry === 'All' || p.industry === industry) &&
      (service === 'All' || projectServices(p).includes(service)),
  )

  const active = openIndex >= 0 ? projects[openIndex] ?? null : null
  const isOpen = Boolean(active)

  const close = () => setOpenIndex(-1)
  const open = (i: number) => setOpenIndex(i)
  const reset = () => {
    setIndustry('All')
    setService('All')
  }

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <>
      <section id="grid" style={{ background: '#f5f7f9', padding: '0 0 120px', borderBottom: '1px solid #e4e7eb' }}>
        <div className="mtr-wrap">
          {/* Sticky dual filters */}
          <div
            style={{
              position: 'sticky',
              top: '82px',
              zIndex: 40,
              background: '#f5f7f9',
              padding: '28px 0 24px',
              borderBottom: '1px solid #e4e7eb',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#7c848e',
                  minWidth: '74px',
                }}
              >
                Industry
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {industries.map((c) => (
                  <button key={c} type="button" onClick={() => setIndustry(c)} style={chipStyle(c === industry)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#7c848e',
                  minWidth: '74px',
                }}
              >
                Service
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {services.map((c) => (
                  <button key={c} type="button" onClick={() => setService(c)} style={chipStyle(c === service)}>
                    {c}
                  </button>
                ))}
              </div>
              <span style={{ marginLeft: 'auto', fontSize: '14px', color: '#7c848e' }}>
                {list.length} of {projects.length} projects
              </span>
            </div>
          </div>

          {/* Grid */}
          <div className="mtr-3col" style={{ gap: '24px', marginTop: '36px' }}>
            {list.map((p) => {
              const globalIndex = projects.findIndex((x) => x.id === p.id)
              const label = serviceLabel(p)
              const img = projectImage(p)
              return (
                <div
                  key={p.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => open(globalIndex)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      open(globalIndex)
                    }
                  }}
                  className="mtr-card-project-page"
                  style={{
                    position: 'relative',
                    background: '#fff',
                    border: '1px solid #e4e7eb',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10', background: '#eef1f4' }}>
                    {img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={img} alt={p.title} className="mtr-img-project-page" />
                    ) : null}
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        fontFamily: 'var(--font-archivo)',
                        fontWeight: 600,
                        fontSize: '11px',
                        letterSpacing: '0.045em',
                        color: '#fff',
                        background: 'rgba(11,28,51,0.8)',
                        padding: '5px 10px',
                      }}
                    >
                      {p.industry}
                    </span>
                  </div>
                  <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: 'var(--font-archivo)',
                        fontWeight: 700,
                        fontSize: '19px',
                        lineHeight: 1.26,
                        letterSpacing: '-0.015em',
                        color: '#0b1c33',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ margin: '12px 0 20px', fontSize: '14.5px', lineHeight: 1.62, color: '#5a626c', flex: 1 }}>
                      {p.summary}
                    </p>
                    <div
                      style={{
                        paddingTop: '18px',
                        borderTop: '1px solid #eceef1',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-archivo)',
                          fontWeight: 600,
                          fontSize: '11.5px',
                          letterSpacing: '0.045em',
                          textTransform: 'uppercase',
                          color: '#7c848e',
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-archivo)',
                          fontWeight: 600,
                          fontSize: '13.5px',
                          color: '#2e76c2',
                          whiteSpace: 'nowrap',
                          flex: '0 0 auto',
                        }}
                      >
                        Project details ⟶
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {list.length === 0 && (
            <div
              style={{
                marginTop: '48px',
                padding: '60px 40px',
                border: '1px dashed #cfd5dc',
                textAlign: 'center',
                background: '#fff',
              }}
            >
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '19px', color: '#0b1c33' }}>
                No projects match that combination.
              </div>
              <p style={{ margin: '10px 0 22px', fontSize: '15px', color: '#5a626c' }}>
                Clear a filter, or ask us directly about work in this area.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mtr-cta-btn"
                style={{
                  height: '46px',
                  padding: '0 24px',
                  border: '1px solid #0b1c33',
                  background: '#0b1c33',
                  color: '#fff',
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detail drawer */}
      {active && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
          <div
            onClick={close}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(9,26,47,0.62)',
              backdropFilter: 'blur(3px)',
              animation: 'mtrVeil 300ms ease both',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: 'min(720px,94vw)',
              height: '100%',
              background: '#fff',
              overflowY: 'auto',
              boxShadow: '-30px 0 80px rgba(9,26,47,0.3)',
              animation: 'mtrPanel 420ms cubic-bezier(.16,1,.3,1) both',
            }}
          >
            <div
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                padding: '20px 32px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #e4e7eb',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#7c848e',
                }}
              >
                {active.industry} — {serviceLabel(active)}
              </span>
              <button
                type="button"
                onClick={close}
                className="mtr-drawer-close"
                style={{
                  width: '38px',
                  height: '38px',
                  border: '1px solid #cfd5dc',
                  background: '#fff',
                  color: '#0b1c33',
                  fontSize: '17px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ aspectRatio: '16/9', background: '#eef1f4', overflow: 'hidden' }}>
              {projectImage(active) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={projectImage(active)}
                  alt={active.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0) contrast(1.04)' }}
                />
              ) : null}
            </div>

            <div style={{ padding: '38px 32px 44px' }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#0b1c33',
                }}
              >
                {active.title}
              </h2>

              {(active.facts ?? []).length > 0 && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: '1px',
                    background: '#e4e7eb',
                    border: '1px solid #e4e7eb',
                    marginTop: '26px',
                  }}
                >
                  {(active.facts ?? []).map((f) => (
                    <div key={f.k} style={{ background: '#fff', padding: '18px 20px' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-archivo)',
                          fontWeight: 600,
                          fontSize: '11.5px',
                          letterSpacing: '0.045em',
                          textTransform: 'uppercase',
                          color: '#7c848e',
                        }}
                      >
                        {f.k}
                      </div>
                      <div
                        style={{
                          marginTop: '8px',
                          fontFamily: 'var(--font-archivo)',
                          fontWeight: 700,
                          fontSize: '15.5px',
                          color: '#0b1c33',
                        }}
                      >
                        {f.v}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {active.brief ? (
                <div style={{ marginTop: '32px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#0b1c33',
                      marginBottom: '12px',
                    }}
                  >
                    The brief
                  </div>
                  <p style={{ margin: 0, fontSize: '16.5px', lineHeight: 1.7, color: '#5a626c' }}>{active.brief}</p>
                </div>
              ) : null}

              {(active.work ?? []).length > 0 && (
                <div style={{ marginTop: '28px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#0b1c33',
                      marginBottom: '12px',
                    }}
                  >
                    What we did
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1px',
                      background: '#e4e7eb',
                      border: '1px solid #e4e7eb',
                    }}
                  >
                    {(active.work ?? []).map((w) => (
                      <div
                        key={w.item}
                        style={{ background: '#fff', padding: '14px 18px', fontSize: '15px', lineHeight: 1.6, color: '#26303b' }}
                      >
                        {w.item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active.outcome ? (
                <div style={{ marginTop: '28px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#0b1c33',
                      marginBottom: '12px',
                    }}
                  >
                    Outcome
                  </div>
                  <p style={{ margin: 0, fontSize: '16.5px', lineHeight: 1.7, color: '#5a626c' }}>{active.outcome}</p>
                </div>
              ) : null}

              <Link
                href="/contact"
                className="mtr-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '52px',
                  padding: '0 30px',
                  marginTop: '34px',
                  background: '#0b1c33',
                  color: '#fff',
                  fontFamily: 'var(--font-archivo)',
                  fontSize: '15px',
                  fontWeight: 700,
                  clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
                }}
              >
                Discuss a similar project
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
