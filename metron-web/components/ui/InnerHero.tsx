'use client'

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

const FADE = 'cubic-bezier(.22,.61,.36,1)'

interface InnerHeroProps {
  /** Simple uppercase label (most pages) */
  label?: string
  /** Dual pill badge — matches About / Quote reference style */
  badgeLeft?: string
  badgeRight?: string
  heading: string
  body?: string
  /** Extra row under body (e.g. Contact CTAs) — fades at 420ms */
  children?: ReactNode
  /** Soft drifting glow orb (About reference) */
  showOrb?: boolean
  /** Animate the orb (default true). Projects reference uses a static orb. */
  orbAnimate?: boolean
  /** Match About.dc.html hero padding (88px / 76px) instead of inner-page default */
  compact?: boolean
  minHeight?: string | number
  headingMaxWidth?: string | number
  bodyMaxWidth?: string | number
  style?: CSSProperties
}

/**
 * Apply entrance animations after mount so hydration does not cancel
 * CSS animations that started on the SSR HTML paint.
 */
export function InnerHero({
  label,
  badgeLeft,
  badgeRight,
  heading,
  body,
  children,
  showOrb = false,
  orbAnimate = true,
  compact = false,
  minHeight,
  headingMaxWidth = 900,
  bodyMaxWidth = 640,
  style,
}: InnerHeroProps) {
  const useBadge = Boolean(badgeLeft)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const anim = (duration: string, delay: string) =>
    ready ? `mtrFadeUp ${duration} ${delay} ${FADE} both` : 'none'

  return (
    <section
      id="top"
      className={compact ? undefined : 'mtr-inner-hero'}
      style={{
        position: 'relative',
        background: compact ? '#0b1c33' : '#091a2f',
        overflow: 'hidden',
        display: compact ? undefined : 'flex',
        alignItems: compact ? undefined : 'center',
        ...(compact ? { padding: '88px 0 76px' } : {}),
        ...(minHeight != null ? { minHeight } : {}),
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: compact
            ? 'linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)'
            : 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />
      {showOrb && (
        <div
          style={{
            position: 'absolute',
            top: '-180px',
            right: '-60px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(46,118,194,0.32) 0%,transparent 70%)',
            animation: orbAnimate ? 'mtrDriftOrb 22s ease-in-out infinite alternate' : undefined,
          }}
        />
      )}

      <div
        style={{
          position: 'relative',
          maxWidth: '1360px',
          margin: '0 auto',
          width: '100%',
          ...(compact ? { padding: '0 44px' } : {}),
        }}
      >
        {useBadge ? (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'stretch',
              border: '1px solid rgba(255,255,255,0.24)',
              marginBottom: '28px',
              opacity: ready ? undefined : 0,
              animation: anim('800ms', '80ms'),
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '9px 14px',
                background: 'rgba(255,255,255,0.10)',
                fontFamily: 'var(--font-archivo)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              {badgeLeft}
            </span>
            {badgeRight && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '9px 16px',
                  borderLeft: '1px solid rgba(255,255,255,0.24)',
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                {badgeRight}
              </span>
            )}
          </div>
        ) : (
          label && (
            <div
              style={{
                fontFamily: 'var(--font-archivo)',
                fontWeight: 600,
                fontSize: '11.5px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#7fc4e8',
                marginBottom: '24px',
                opacity: ready ? undefined : 0,
                animation: anim('800ms', '80ms'),
              }}
            >
              {label}
            </div>
          )
        )}

        <h1
          style={{
            margin: body || children ? (compact ? '0' : '0 0 20px') : 0,
            maxWidth: headingMaxWidth,
            fontFamily: 'var(--font-archivo)',
            fontWeight: 800,
            fontSize: compact ? 'clamp(36px,4.6vw,64px)' : 'clamp(36px,5vw,68px)',
            lineHeight: compact ? 1.03 : 1.06,
            letterSpacing: compact ? '-0.035em' : '-0.03em',
            color: '#fff',
            opacity: ready ? undefined : 0,
            animation: anim('900ms', '180ms'),
          }}
        >
          {heading}
        </h1>

        {body && (
          <p
            style={{
              margin: compact ? '24px 0 0' : 0,
              maxWidth: bodyMaxWidth,
              fontSize: compact ? '18px' : '17px',
              lineHeight: compact ? 1.66 : 1.68,
              color: compact ? 'rgba(255,255,255,0.74)' : 'rgba(255,255,255,0.75)',
              opacity: ready ? undefined : 0,
              animation: anim('900ms', '300ms'),
            }}
          >
            {body}
          </p>
        )}

        {children && (
          <div
            style={{
              marginTop: '38px',
              opacity: ready ? undefined : 0,
              animation: anim('900ms', '420ms'),
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
