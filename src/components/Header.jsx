import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre nosotros', href: '#about' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1C0F0A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold text-white font-heading tracking-tight">
              Kebab<span className="text-[#D94A2B]">Express</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/34XXXXXXXXX?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#D94A2B] hover:bg-[#c03d1f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#D94A2B]/25"
          >
            <Phone size={16} />
            Pide por WhatsApp
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#1C0F0A]/95 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/34XXXXXXXXX?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#D94A2B] text-white px-5 py-3 rounded-full text-sm font-semibold mt-4"
            >
              <Phone size={16} />
              Pide por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
