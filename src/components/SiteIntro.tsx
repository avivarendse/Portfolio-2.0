import { useEffect, useRef, useState } from 'react'

const INTRO_SESSION_KEY = 'road-to-the-first-team:intro-seen'
const INTRO_DURATION_MS = 1560

function shouldShowIntro() {
  if (typeof window === 'undefined') {
    return false
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false
  }

  try {
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== 'true'
  } catch (error) {
    console.warn('Unable to read the intro screen session state.', error)
    return true
  }
}

export function SiteIntro() {
  const [isVisible, setIsVisible] = useState(shouldShowIntro)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isVisible || hasStarted.current) {
      return
    }

    hasStarted.current = true

    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, 'true')
    } catch (error) {
      console.warn('Unable to save the intro screen session state.', error)
    }

    const dismissIntro = () => {
      setIsVisible(false)
    }

    window.addEventListener('pointerdown', dismissIntro, { once: true })
    window.addEventListener('keydown', dismissIntro, { once: true })

    const timeout = window.setTimeout(() => {
      setIsVisible(false)
    }, INTRO_DURATION_MS)

    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener('pointerdown', dismissIntro)
      window.removeEventListener('keydown', dismissIntro)
      hasStarted.current = false
    }
  }, [isVisible])

  if (!isVisible) {
    return null
  }

  return (
    <div className="site-intro" aria-hidden="true">
      <svg
        className="site-intro-pitch"
        viewBox="0 0 900 420"
        role="presentation"
        focusable="false"
      >
        <rect
          className="site-intro-line site-intro-frame"
          pathLength="1"
          x="24"
          y="24"
          width="852"
          height="372"
        />
        <path
          className="site-intro-line site-intro-field"
          pathLength="1"
          d="M450 24v372M24 210h852"
        />
        <circle
          className="site-intro-line site-intro-field"
          pathLength="1"
          cx="450"
          cy="210"
          r="82"
        />
        <circle className="site-intro-center" cx="450" cy="210" r="4" />
        <path
          className="site-intro-line site-intro-field"
          pathLength="1"
          d="M24 112h112v196H24m852-196H764v196h112M24 152h48v116H24m852-116h-48v116h48"
        />
      </svg>

      <div className="site-intro-wordmark">
        <span className="site-intro-kicker">Career mode</span>
        <span className="site-intro-title">Road to the first team</span>
        <span className="site-intro-rule" />
      </div>
    </div>
  )
}
