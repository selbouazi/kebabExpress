import { useState, useEffect } from 'react'
import { contactInfo } from '../data/restaurantData'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Kebab', href: '#kebab' },
  { label: 'Pizza', href: '#pizza' },
  { label: 'Infantil', href: '#kids' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-green-brand/95 shadow-lg shadow-black/30 backdrop-blur-sm' : 'bg-green-brand'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => scroll(e, '#hero')} className="flex items-center gap-3">
            <img src="/logo.png" alt="Express Kebab" className="h-14 w-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]" />
            <span className="text-xl sm:text-2xl font-display text-white tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
              Express Kebab
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scroll(e, link.href)}
                className="px-4 py-2 text-white/85 font-body text-sm uppercase tracking-widest hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gold text-green-brand font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Pide ya
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-green-brand/98 backdrop-blur-md transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scroll(e, link.href)}
              className="text-white/80 hover:text-gold text-2xl font-display uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-10 py-4 bg-gold text-green-brand font-semibold text-lg uppercase tracking-wider rounded hover:bg-gold-dark transition-all shadow-lg"
          >
            Pide por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
