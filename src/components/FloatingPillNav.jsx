import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactInfo } from '../data/restaurantData'
import { X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
]

const sectionIds = links.map(l => l.href.slice(1))

function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); onClick(href) }}
      className={`relative px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium rounded-full transition-all duration-300 ${
        active
          ? 'text-cream'
          : 'text-cream-muted/60 hover:text-cream'
      }`}
    >
      {active && (
        <motion.span
          layoutId="navGlow"
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(193,80,46,0.15), transparent 70%)',
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </a>
  )
}

export default function FloatingPillNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveSection('#' + visible[0].target.id)
        }
      },
      { rootMargin: '-100px 0px -60% 0px' }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 flex justify-center pt-5 z-50 pointer-events-none">
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="flex items-center rounded-full pointer-events-auto overflow-hidden"
          style={{
            backgroundColor: scrolled ? 'rgba(38, 30, 26, 0.85)' : 'rgba(38, 30, 26, 0)',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            border: scrolled ? '1px solid rgba(193, 80, 46, 0.12)' : '1px solid rgba(193, 80, 46, 0)',
            boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
          }}
        >
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
            className="w-10 h-10 flex items-center justify-center shrink-0 mx-1"
          >
            <img
              src="/logo.svg"
              alt="Express Kebab"
              width="26" height="26"
              className="h-[26px] w-auto"
            />
          </a>

          <div
            className={`flex items-center gap-0.5 overflow-hidden transition-all duration-400 ease-out ${
              scrolled ? 'max-w-[600px] opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            <div className="w-px h-5 bg-paprika/15 mx-1 shrink-0" />

            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={activeSection === link.href}
                onClick={scrollTo}
              />
            ))}

            <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-paprika/15">
              <span className="text-saffron font-bold text-[10px]">4.5</span>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-paprika text-cream font-semibold text-[10px] uppercase tracking-widest rounded-full hover:bg-paprika-dark transition-colors shadow-lg shadow-paprika/20"
              >
                Pide ya
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    )
  }

  return (
    <>
      <motion.button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-20 left-4 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: '#C1502E', boxShadow: '0 4px 16px rgba(193,80,46,0.35)' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Abrir menú"
      >
        <img src="/logo.svg" alt="" width="22" height="22" className="h-[22px] w-auto brightness-0 invert" />
      </motion.button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, transformOrigin: 'bottom left' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 px-6"
            style={{ backgroundColor: 'rgba(26, 20, 18, 0.96)', backdropFilter: 'blur(24px)' }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              aria-label="Cerrar menú"
            >
              <X size={18} style={{ color: '#F2E8DC' }} />
            </button>

            <img
              src="/logo.svg"
              alt="Express Kebab"
              width="56" height="56"
              className="h-14 w-auto mb-2"
            />

            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="relative text-xl uppercase tracking-widest font-medium py-2 px-6 rounded-full transition-all duration-300"
                style={{
                  color: activeSection === link.href ? '#F2E8DC' : 'rgba(184, 168, 154, 0.5)',
                }}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="mobileActiveBg"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(193,80,46,0.12), transparent 70%)',
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}

            <motion.a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3, ease: 'easeOut' }}
              className="mt-3 px-10 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider shadow-xl"
              style={{
                backgroundColor: '#C1502E',
                color: '#F2E8DC',
                boxShadow: '0 4px 20px rgba(193,80,46,0.3)',
              }}
            >
              Pide por WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
