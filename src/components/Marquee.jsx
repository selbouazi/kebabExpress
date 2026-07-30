import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Marquee({ items, speed = 25, direction = 'left', className = '' }) {
  const [duplicated, setDuplicated] = useState([])
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setDuplicated([...items, ...items])
  }, [items])

  return (
    <div
      className={`relative overflow-hidden w-full ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={paused ? undefined : {
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={paused ? undefined : {
          repeat: Infinity,
          duration: speed,
          ease: 'linear',
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-white/70 font-body text-xs uppercase tracking-widest font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0" />
            <span>{item}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
