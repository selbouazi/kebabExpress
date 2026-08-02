import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactInfo } from '../data/restaurantData'
import { Star } from 'lucide-react'
import MagneticButton from './MagneticButton'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
]

const sectionIds = links.map(l => l.href.slice(1))

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const observerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

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

    return () => {
      window.removeEventListener('scroll', onScroll)
      observerRef.current?.disconnect()
    }
  }, [])

  const scroll = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-green-brand/90 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => scroll(e, '#hero')} className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/logo.svg" alt="Express Kebab" width="56" height="56" className="h-14 w-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="hidden sm:block text-xl sm:text-2xl font-display text-white tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
              Express Kebab
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scroll(e, link.href)}
                className={`relative px-4 py-2 font-body text-sm uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === link.href
                    ? 'text-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
              <div className="flex items-center gap-1 text-gold">
                <Star size={12} className="fill-gold" />
                <span className="text-white font-semibold text-xs">4.5</span>
              </div>
              <span className="text-white/35 text-[10px] hidden xl:inline">203 reseñas</span>
            </div>
            <MagneticButton as="a" href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(244, 196, 48, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="block ml-2 btn btn-primary px-5 py-2 text-xs"
              >
                Pide ya
              </motion.span>
            </MagneticButton>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5 bg-gold' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5 bg-gold' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-b from-green-brand to-green-dark shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scroll(e, link.href)}
                  className={`text-3xl font-display uppercase tracking-wider transition-all duration-300 hover:scale-110 ${
                    activeSection === link.href
                      ? 'text-gold drop-shadow-[0_0_20px_rgba(244,196,48,0.3)]'
                      : 'text-white/70 hover:text-gold'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <motion.a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-12 py-4 bg-gold text-green-brand font-semibold text-lg uppercase tracking-wider rounded-full hover:bg-gold-dark transition-colors shadow-xl"
              >
                Pide por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
