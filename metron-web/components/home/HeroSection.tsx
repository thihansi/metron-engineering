'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

interface HeroSectionProps {
  badgeLeft: string
  badgeRight: string
  line1: string
  line2: string
  line3: string
  body: string
  cta1Label: string
  cta2Label: string
  imageUrl: string
}

export function HeroSection({
  badgeLeft,
  badgeRight,
  line1,
  line2,
  line3,
  body,
  cta1Label,
  cta2Label,
  imageUrl,
}: HeroSectionProps) {
  const scanRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax: background image drifts at 6% of scroll speed (matches reference data-parallax)
    let rafId = 0
    const onScroll = () => {
      const y = window.scrollY
      if (!parallaxRef.current || y >= window.innerHeight * 1.2) return
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (parallaxRef.current) parallaxRef.current.style.transform = `translate3d(0,${y * 0.06}px,0)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Animate heading letters
    document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
      if (el.dataset.done) return
      el.dataset.done = '1'
      const splitIndex = parseInt(el.dataset.split ?? '0', 10)
      const base = 180 + splitIndex * 260
      const chars = Array.from(el.textContent ?? '')
      el.textContent = ''
      chars.forEach((ch, i) => {
        const s = document.createElement('span')
        s.textContent = ch === ' ' ? ' ' : ch
        s.style.display = 'inline-block'
        s.style.animation = `mtrLetter 820ms ${base + i * 42}ms cubic-bezier(.16,1,.3,1) both, mtrWave 11s ${2400 + i * 55}ms ease-in-out infinite`
        el.appendChild(s)
      })
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#091a2f',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Drifting background image + scroll parallax */}
      <div
        ref={parallaxRef}
        style={{ position: 'absolute', inset: '-6%', width: '112%', height: '112%', overflow: 'hidden', willChange: 'transform' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Structural steel"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(1) contrast(1.05) brightness(1.05)',
            opacity: 0.42,
            animation: 'mtrDrift 44s linear infinite alternate',
            willChange: 'transform',
            transform: 'translateZ(0)',
            contain: 'paint',
          }}
        />
      </div>

      {/* Gradients */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(9,26,47,0.96) 0%,rgba(9,26,47,0.72) 46%,rgba(9,26,47,0.30) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.055) 1px,transparent 1px)', backgroundSize: '96px 96px' }} />

      {/* Scan line */}
      <div
        ref={scanRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg,transparent,rgba(127,196,232,0.55),transparent)',
          animation: 'mtrScan 9s cubic-bezier(.4,0,.6,1) infinite',
        }}
      />

      {/* Glow orb */}
      <div style={{ position: 'absolute', top: '18%', right: '8%', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(46,118,194,0.34) 0%,transparent 70%)' }} />

      {/* Content */}
      <div className="mtr-hero-content">
        {/* Badge row */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'stretch',
            border: '1px solid rgba(255,255,255,0.24)',
            marginBottom: '34px',
            animation: 'mtrFadeUp 900ms 120ms cubic-bezier(.22,.61,.36,1) both',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', padding: '9px 14px', background: 'rgba(255,255,255,0.10)', fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#fff' }}>
            {badgeLeft}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', padding: '9px 16px', borderLeft: '1px solid rgba(255,255,255,0.24)', fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: '13px', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.8)' }}>
            {badgeRight}
          </span>
        </div>

        {/* Heading */}
        <h1 style={{ margin: 0, maxWidth: '1000px', fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: 'clamp(48px,6.2vw,92px)', lineHeight: 1.08, letterSpacing: '-0.035em', color: '#fff' }}>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.08em', marginBottom: '-0.08em' }}>
            <span data-split="0" style={{ display: 'inline-block' }}>{line1}</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span data-split="1" style={{ display: 'inline-block' }}>{line2}</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span data-split="2" style={{ display: 'inline-block', color: '#7fc4e8' }}>{line3}</span>
          </span>
        </h1>

        {/* Body + CTAs */}
        <div
          className="mtr-hero-grid"
          style={{ animation: 'mtrFadeUp 1s 560ms cubic-bezier(.22,.61,.36,1) both' }}
        >
          <p style={{ margin: 0, maxWidth: '560px', fontSize: '18px', lineHeight: 1.68, color: 'rgba(255,255,255,0.78)', textWrap: 'pretty' as const }}>
            {body}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <Link
              href="/contact"
              className="mtr-btn-light"
              style={{
                position: 'relative',
                overflow: 'hidden',
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
              {cta1Label}
            </Link>
            <Link
              href="/services"
              className="mtr-btn-ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '56px',
                padding: '0 30px',
                border: '1px solid rgba(255,255,255,0.34)',
                color: '#fff',
                fontFamily: 'var(--font-archivo)',
                fontSize: '15.5px',
                fontWeight: 600,
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {cta2Label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
