import { useRef, useState } from 'react'

export default function MagneticButton({ children, className = '', as: Tag = 'button', href, ...props }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setOffset({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 })

  const content = (
    <span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic inline-block transition-transform duration-200 ease-out ${className}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {children}
    </span>
  )

  if (Tag === 'a' && href) {
    return <a href={href} {...props}>{content}</a>
  }

  return <Tag {...props}>{content}</Tag>
}
