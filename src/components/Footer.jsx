import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'
import { scheduleData } from '../data/scheduleData'
import { dayNames } from '../data/constants'
import { SocialLinks, WhatsAppLink } from './SocialLinks'

const quickLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToSection(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-green-dark to-green-brand/90 border-t border-gold/20 turkish-pattern">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Express Kebab" width="52" height="52" className="h-13 w-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]" />
              <div>
                <p className="text-xl font-display text-white tracking-wide drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]">
                  Express Kebab
                </p>
                <p className="text-gold/60 font-light text-[10px] uppercase tracking-[0.2em]">El auténtico sabor turco</p>
              </div>
            </div>
            <p className="text-white/45 font-light text-xs leading-relaxed max-w-sm mb-4">
              Tu kebab de confianza en El Vendrell. Pollo, ternera, mixto, pizzas, menú infantil. Domicilio gratis.
            </p>
            <motion.a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 16px rgba(244, 196, 48, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-green-brand font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-gold-dark transition-colors shadow-lg"
            >
              Pide por WhatsApp
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold/40" />
              Enlaces
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/45 hover:text-gold font-light text-xs transition-colors duration-300 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold/40" />
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${contactInfo.phoneRaw}`} className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone size={11} className="text-gold/70" />
                  </span>
                  <span className="text-white/45 group-hover:text-gold font-light text-xs transition-colors">
                    {contactInfo.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail size={11} className="text-gold/70" />
                  </span>
                  <span className="text-white/45 group-hover:text-gold font-light text-xs transition-colors">
                    {contactInfo.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <MapPin size={11} className="text-gold/70" />
                  </span>
                  <span className="text-white/45 group-hover:text-gold font-light text-xs transition-colors">
                    {contactInfo.address.street}<br />
                    <span className="text-white/30">{contactInfo.address.city}</span>
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold/40" />
              Horario
            </h4>
            <ul className="space-y-1.5">
              {Object.entries(scheduleData).map(([day, s]) => (
                <li key={day} className="flex justify-between text-[11px] text-white/40 font-light">
                  <span className="text-white/50">{dayNames[day]}</span>
                  <span>{s.open} — {s.close}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-3">
            <SocialLinks size="sm" />
            <WhatsAppLink href={contactInfo.whatsapp} />
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#F4C430', color: '#1B5E3A' }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 ring-1 ring-white/10"
            aria-label="Volver arriba"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-light text-xs tracking-wider">&copy; {year} Express Kebab. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/aviso-legal" className="text-white/40 hover:text-gold font-light text-xs transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="text-white/40 hover:text-gold font-light text-xs transition-colors">Privacidad</Link>
            <Link to="/cookies" className="text-white/40 hover:text-gold font-light text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
