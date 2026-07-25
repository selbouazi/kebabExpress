import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches
    if (!isDesktop) return

    setVisible(true)
    document.body.style.cursor = 'none'

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = () => setHovering(true)
    const out = () => setHovering(false)

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', over)
        el.removeEventListener('mouseleave', out)
      })
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div className="fixed pointer-events-none z-[10000] w-2 h-2 bg-cinnabar rounded-full -translate-x-1/2 -translate-y-1/2 transition-none" style={{ left: pos.x, top: pos.y }} />
      <div
        className={`fixed pointer-events-none z-[9999] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out ${
          hovering ? 'w-14 h-14 border-cinnabar/50 bg-cinnabar/5' : 'border-white/20'
        }`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  )
}
