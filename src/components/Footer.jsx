import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { contactInfo } from '../data/restaurantData'
import { scheduleData } from '../data/scheduleData'
import { dayNames } from '../data/constants'
import { useOpenStatus } from '../context/OpenStatusContext'
import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
]

function scrollToSection(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

function DayRow({ day, schedule, isToday }) {
  return (
    <div className={`flex justify-between text-xs py-0.5 ${isToday ? 'text-cream font-medium' : 'text-cream-muted/40'}`}>
      <span>{dayNames[day]}</span>
      <span className={isToday ? 'text-saffron' : ''}>
        {schedule.open} — {schedule.close}
        {isToday && <span className="ml-1.5 text-[10px]">← hoy</span>}
      </span>
    </div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export default function Footer() {
  const isOpen = useOpenStatus()
  const year = new Date().getFullYear()
  const todayKey = Object.keys(dayNames).find(
    (k) => dayNames[k].toLowerCase() === new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase()
  )

  return (
    <footer className="relative bg-charcoal border-t overflow-hidden" style={{ borderColor: 'rgba(193, 80, 46, 0.08)' }}>
      <div className="absolute inset-0 pointer-events-none flex items-start justify-center select-none">
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="w-[400px] h-auto mt-16 opacity-[0.04] sm:opacity-[0.03]"
        />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{
                    backgroundColor: isOpen ? '#4ADE80' : '#C04040',
                    boxShadow: isOpen ? '0 0 8px rgba(74,222,128,0.5)' : 'none',
                  }}
                />
                <span
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: isOpen ? '#4ADE80' : '#C04040' }}
                >
                  {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
                </span>
              </div>
            </div>
            <p className="text-cream-muted/60 text-sm font-light leading-relaxed mb-3">
              {isOpen
                ? 'Te esperamos. Pide para llevar, come aquí o solicita domicilio gratis.'
                : 'Vuelve en nuestro horario habitual. También puedes pedir con antelación.'}
            </p>
            <p className="text-cream-muted/40 text-xs font-light">
              {contactInfo.address.street} · {contactInfo.address.city}
            </p>
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="text-cream-muted/60 hover:text-cream text-xs transition-colors inline-block mt-1"
            >
              {contactInfo.phone}
            </a>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }} className="lg:col-span-3">
            <h4 className="text-cream-muted/50 text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">Enlaces</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-cream-muted/50 hover:text-cream text-xs transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }} className="lg:col-span-4">
            <h4 className="text-cream-muted/50 text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">Horario</h4>
            <div className="space-y-0.5">
              {Object.entries(scheduleData).map(([day, schedule]) => (
                <DayRow key={day} day={day} schedule={schedule} isToday={day === todayKey} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t"
          style={{ borderColor: 'rgba(193, 80, 46, 0.08)' }}
        >
          <div className="flex items-center gap-4">
            <SocialLinks size="sm" />
          </div>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-paprika text-cream font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-paprika-dark transition-colors shrink-0"
            style={{ boxShadow: '0 4px 16px rgba(193, 80, 46, 0.25)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pide por WhatsApp
          </a>
        </motion.div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-1"
          style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}
        >
          <p className="text-cream-muted/25 text-[10px] tracking-wider">&copy; {year} Express Kebab</p>
          <div className="flex gap-4">
            <Link to="/aviso-legal" className="text-cream-muted/25 hover:text-cream-muted/60 text-[10px] transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="text-cream-muted/25 hover:text-cream-muted/60 text-[10px] transition-colors">Privacidad</Link>
            <Link to="/cookies" className="text-cream-muted/25 hover:text-cream-muted/60 text-[10px] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
