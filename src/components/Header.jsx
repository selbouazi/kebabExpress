import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Equipo', href: '#about' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.2, rootMargin: '-100px 0px 0px 0px' }
    )

    links.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const scroll = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-ebony/95 backdrop-blur-xl shadow-2xl shadow-black/40'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a
            href="#hero"
            onClick={(e) => scroll(e, '#hero')}
            className="relative group"
          >
            <span className="text-2xl lg:text-3xl font-bold text-white font-heading tracking-tight">
              K<span className="text-cinnabar">E</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-cinnabar to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scroll(e, link.href)}
                  className={`relative px-5 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                    isActive ? 'text-cinnabar' : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-5 right-5 h-px bg-cinnabar rounded-full" />
                  )}
                </a>
              )
            })}

            <span className="w-px h-5 bg-white/10 mx-4" />

            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 overflow-hidden rounded-full transition-all duration-300"
            >
              <span className="absolute inset-0 bg-cinnabar rounded-full transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 20px rgba(199, 59, 30, 0.3)' }} />
              <Phone size={14} className="relative z-10 text-white" />
              <span className="relative z-10 text-white text-xs font-semibold tracking-widest uppercase">
                WhatsApp
              </span>
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Menú"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-ebony/98 backdrop-blur-2xl transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3 px-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scroll(e, link.href)}
              className="text-white/60 hover:text-cinnabar text-2xl font-heading transition-all duration-300"
              style={{
                transitionDelay: open ? `${i * 0.06}s` : '0s',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: open ? `${i * 0.06}s` : '0s',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-cinnabar text-white px-10 py-4 rounded-full text-base font-semibold mt-8 hover:bg-[#a8321a] transition-colors"
            style={{
              transitionDelay: open ? '0.35s' : '0s',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: open ? '0.35s' : '0s',
            }}
          >
            <Phone size={18} />
            Pide por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
