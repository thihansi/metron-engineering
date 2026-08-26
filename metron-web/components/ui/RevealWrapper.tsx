'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

function clearAnim(el: HTMLElement) {
  el.style.animation = 'none'
  el.style.opacity = '1'
  el.style.transform = ''
}

/**
 * Scroll reveal via CSS animation. Clears animation after it ends so
 * fill-mode does not lock `transform` and block hover effects.
 */
export function RevealWrapper({ children, delay = 0, className, style }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const staggerItems = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal-item]'))
    staggerItems.forEach((item) => {
      item.style.opacity = '0'
      item.style.transform = 'translateY(16px)'
      item.style.animation = 'none'
      item.style.transition = 'none'
    })

    let cancelled = false

    const runReveal = () => {
      if (cancelled) return
      setVisible(true)

      const onParentEnd = (e: AnimationEvent) => {
        if (e.target !== el) return
        el.removeEventListener('animationend', onParentEnd)
        clearAnim(el)
      }
      el.addEventListener('animationend', onParentEnd)

      if (staggerItems.length === 0) return

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return
          staggerItems.forEach((item, i) => {
            const onItemEnd = () => {
              item.removeEventListener('animationend', onItemEnd)
              clearAnim(item)
            }
            item.addEventListener('animationend', onItemEnd)
            item.style.animation = `mtrRevealItem 620ms ${i * 55}ms cubic-bezier(.16,1,.3,1) both`
          })
        })
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          runReveal()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    )
    observer.observe(el)

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? undefined : 0,
        transform: visible ? undefined : 'translateY(26px)',
        animation: visible
          ? `mtrReveal 900ms ${delay}ms cubic-bezier(.16,1,.3,1) both`
          : 'none',
      }}
    >
      {children}
    </div>
  )
}
