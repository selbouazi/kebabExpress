import { useEffect, useState } from 'react'
import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const handler = (e) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (prefersReduced) return children

  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
