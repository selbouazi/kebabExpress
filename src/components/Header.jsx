import { useState, useEffect } from 'react'
import { contactInfo } from '../data/restaurantData'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)

      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= y + 200) {
          setActiveSection('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
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
              <img src="/logo.png" alt="Express Kebab" className="h-14 w-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105" />
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
                className={`relative px-4 py-2 font-body text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeSection === link.href
                    ? 'text-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gold rounded-full" />
                )}
              </a>
            ))}
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gold text-green-brand font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-gold-dark transition-all shadow-lg hover:shadow-gold/20 hover:shadow-xl active:scale-95"
            >
              Pide ya
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5 bg-gold' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5 bg-gold' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-b from-green-brand to-green-dark shadow-2xl transition-all duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
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
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-12 py-4 bg-gold text-green-brand font-semibold text-lg uppercase tracking-wider rounded-full hover:bg-gold-dark transition-all shadow-xl hover:shadow-gold/20 active:scale-95"
          >
            Pide por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
