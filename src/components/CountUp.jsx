import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { animate } from 'framer-motion'

export default function CountUp({ to, decimals = 1, duration = 2 }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Number(v.toFixed(decimals))),
    })
    return () => controls.stop()
  }, [isInView, to, decimals, duration])

  return <span ref={ref}>{count}</span>
}
