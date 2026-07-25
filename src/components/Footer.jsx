import { MessageCircle, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Equipo', href: '#about' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Contacto', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-ebony overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cinnabar/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <span className="text-2xl lg:text-3xl font-bold text-white font-heading tracking-tight">
              K<span className="text-cinnabar">E</span>
            </span>
            <p className="text-white/25 text-sm mt-4 leading-relaxed max-w-xs font-light">
              Auténtico sabor pakistaní en Madrid. Ingredientes frescos, recetas tradicionales y servicio rápido desde 2026.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/[0.03] flex items-center justify-center transition-all duration-300 text-white/30 hover:text-[#25D366] hover:bg-[#25D366]/10"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="w-10 h-10 rounded-sm bg-white/[0.03] flex items-center justify-center transition-all duration-300 text-white/30 hover:text-cinnabar hover:bg-cinnabar/10"
              >
                <Phone size={16} />
              </a>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/[0.03] flex items-center justify-center transition-all duration-300 text-white/30 hover:text-gold hover:bg-gold/10"
              >
                <MapPin size={16} />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/[0.03] flex items-center justify-center transition-all duration-300 text-white/30 hover:text-cinnabar hover:bg-cinnabar/10"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/[0.03] flex items-center justify-center transition-all duration-300 text-white/30 hover:text-gold hover:bg-gold/10"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-semibold mb-5">Enlaces</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scroll(e, link.href)}
                    className="text-white/30 hover:text-cinnabar text-sm transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-semibold mb-5">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="/aviso-legal" className="text-white/30 hover:text-cinnabar text-sm transition-colors duration-300 font-light">Aviso Legal</a></li>
              <li><a href="/privacidad" className="text-white/30 hover:text-cinnabar text-sm transition-colors duration-300 font-light">Privacidad</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-semibold mb-5">Contacto</h4>
            <div className="space-y-2 text-sm text-white/30 font-light">
              <p>{contactInfo.address.street}</p>
              <p>{contactInfo.address.city}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.03] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs font-light">&copy; {year} Kebab Express — {contactInfo.address.street}</p>
          <p className="text-white/10 text-[10px] tracking-wider uppercase">Hecho con dedicación</p>
        </div>
      </div>
    </footer>
  )
}
