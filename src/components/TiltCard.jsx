import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({ children, className = '', tiltDegree = 12, ...props }) {
  const ref = useRef(null)
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 })
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotation({
      rotateX: -(y - 0.5) * tiltDegree,
      rotateY: (x - 0.5) * tiltDegree,
    })
    setGlowPos({ x: x * 100, y: y * 100 })
  }, [tiltDegree])

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 })
    setGlowPos({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={rotation}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      style={{
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
      {...props}
    >
      <div
        className="absolute inset-0 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(244, 196, 48, 0.12), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  )
}
