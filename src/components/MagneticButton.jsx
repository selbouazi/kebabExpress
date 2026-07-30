import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', as: Tag = 'div', ...props }) {
  const ref = useRef(null)
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPosition({
      x: (e.clientX - centerX) * 0.35,
      y: (e.clientY - centerY) * 0.35,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      <motion.span
        className="block"
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 200, damping: 12, mass: 0.15 }}
      >
        {children}
      </motion.span>
    </Tag>
  )
}
