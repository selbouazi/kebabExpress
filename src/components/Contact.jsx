import { useState } from 'react'
import { Phone, MessageCircle, Clock, MapPin, Send, ChevronRight } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { contactInfo } from '../data/restaurantData'
import { scheduleData } from '../data/menuData'

const dayNames = {
  monday: 'Lunes', tuesday: 'Martes', wednesday: 'Miércoles',
  thursday: 'Jueves', friday: 'Viernes', saturday: 'Sábado', sunday: 'Domingo',
}

const contactCards = [
  {
    icon: MessageCircle,
    color: '#25D366',
    label: 'WhatsApp',
    value: contactInfo.phone,
    href: contactInfo.whatsapp,
    external: true,
    delay: 0,
  },
  {
    icon: Phone,
    color: 'var(--color-gold)',
    label: 'Llámanos',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phoneRaw}`,
    external: false,
    delay: 1,
  },
  {
    icon: MapPin,
    color: 'var(--color-gold)',
    label: 'Dirección',
    value: null,
    href: contactInfo.mapsUrl,
    external: true,
    delay: 2,
  },
  {
    icon: null,
    color: 'var(--color-gold)',
    label: 'Síguenos',
    value: null,
    href: null,
    external: false,
    delay: 3,
    social: true,
  },
  {
    icon: null,
    color: 'var(--color-gold)',
    label: 'Horario',
    value: null,
    href: null,
    external: false,
    delay: 4,
    schedule: true,
  },
]

export default function Contact() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')
  const [formErrors, setFormErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (formData.name.trim().length < 2) errs.name = 'Mínimo 2 caracteres'
    if (!formData.contact.trim()) errs.contact = 'Campo obligatorio'
    else if (!/^[\d\s\-+()]+$/.test(formData.contact) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact))
      errs.contact = 'Teléfono o email no válido'
    if (formData.message.trim().length < 10) errs.message = 'Mínimo 10 caracteres'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setFormErrors(errs)
    if (Object.keys(errs).length) return
    setFormStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xjgnpple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', contact: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const todayKey = Object.keys(dayNames).find(
    (k) => dayNames[k].toLowerCase() === new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase()
  )

  return (
    <section id="contact" ref={sectionRef} className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-green-brand section-pattern overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 mb-4 mx-auto ring-2 ring-gold/10">
            <MessageCircle size={30} className="text-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            CONTACTO
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold/60 text-lg">✦</span>
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {contactCards.map((card, i) => {
            if (card.social) {
              return (
                <div key={i} className={`reveal glass-card rounded-xl p-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                  style={{ transitionDelay: `${card.delay * 0.08}s` }}
                >
                  <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3 text-center">Síguenos</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-green-brand transition-all duration-300 ring-1 ring-gold/20 hover:ring-gold"
                      aria-label="Instagram"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href={contactInfo.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-green-brand transition-all duration-300 ring-1 ring-gold/20 hover:ring-gold"
                      aria-label="Facebook"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )
            }
            if (card.schedule) {
              return (
                <div key={i} className={`reveal glass-card rounded-xl p-4 shadow-lg transition-all duration-300`}
                  style={{ transitionDelay: `${card.delay * 0.08}s` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="text-gold" size={14} />
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Horario</p>
                  </div>
                  <div className="space-y-0.5">
                    {Object.entries(scheduleData).map(([day, schedule]) => (
                      <div
                        key={day}
                        className={`flex justify-between text-[11px] ${
                          day === todayKey ? 'text-gold font-medium' : 'text-white/50 font-light'
                        }`}
                      >
                        <span>{dayNames[day]}</span>
                        <span>{schedule.open} — {schedule.close}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            const Wrapper = card.href ? (card.external ? 'a' : 'a') : 'div'
            const wrapperProps = card.href
              ? { href: card.href, target: card.external ? '_blank' : undefined, rel: card.external ? 'noopener noreferrer' : undefined }
              : {}
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className={`reveal glass-card rounded-xl p-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${card.href ? 'cursor-pointer' : ''}`}
                style={{ transitionDelay: `${card.delay * 0.08}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/20">
                    <card.icon className="text-gold" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white uppercase tracking-wide">{card.label}</p>
                    {card.value && <p className="text-white/50 font-light text-[11px] mt-0.5">{card.value}</p>}
                  </div>
                  {card.href && <ChevronRight size={14} className="text-gold/40 ml-auto flex-shrink-0" />}
                </div>
                {card.label === 'Dirección' && (
                  <p className="text-white/45 font-light text-[11px] mt-2 pl-14">{contactInfo.address.city}</p>
                )}
              </Wrapper>
            )
          })}
        </div>

        <div className="max-w-xl mx-auto mb-12 reveal">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-3 mx-auto ring-2 ring-gold/10">
              <Send size={20} className="text-gold" />
            </div>
            <h3 className="text-xl font-display text-gold uppercase tracking-wider drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]">
              Escríbenos
            </h3>
            <p className="text-white/45 font-body text-xs mt-1">Te responderemos en menos de 24h</p>
          </div>
          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 shadow-lg space-y-4">
            <div>
              <label className="block text-white/60 font-body text-xs uppercase tracking-wider mb-1.5">Nombre</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-green-dark/50 border border-white/10 rounded-lg px-4 py-2.5 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                placeholder="Tu nombre"
              />
              {formErrors.name && <p className="text-red-cola text-xs mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-white/60 font-body text-xs uppercase tracking-wider mb-1.5">Teléfono o Email</label>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full bg-green-dark/50 border border-white/10 rounded-lg px-4 py-2.5 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                placeholder="Teléfono o email"
              />
              {formErrors.contact && <p className="text-red-cola text-xs mt-1">{formErrors.contact}</p>}
            </div>
            <div>
              <label className="block text-white/60 font-body text-xs uppercase tracking-wider mb-1.5">Mensaje</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-green-dark/50 border border-white/10 rounded-lg px-4 py-2.5 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                placeholder="Escribe tu mensaje..."
              />
              {formErrors.message && <p className="text-red-cola text-xs mt-1">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full py-3 bg-gold text-green-brand font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-all shadow-lg hover:shadow-gold/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            {formStatus === 'success' && (
              <div className="bg-green-500/15 border border-green-400/20 rounded-lg p-3 text-center">
                <p className="text-green-300 font-body text-sm">Mensaje enviado, te responderemos pronto.</p>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="bg-red-cola/15 border border-red-cola/20 rounded-lg p-3 text-center">
                <p className="text-red-300 font-body text-sm">
                  No se pudo enviar.{' '}
                  <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                    Escríbenos por WhatsApp
                  </a>
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="text-center mb-8 reveal">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-green-brand font-semibold text-base uppercase tracking-wider rounded-full hover:bg-gold-dark transition-all shadow-xl hover:shadow-gold/20 active:scale-95"
          >
            <MessageCircle size={20} />
            Pide por WhatsApp
          </a>
        </div>

        <div className="text-center reveal">
          <p className="text-white/40 font-light text-xs uppercase tracking-wider mb-3">O pide en</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 text-xs uppercase tracking-wider rounded-full hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all"
            >
              Glovo
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 text-xs uppercase tracking-wider rounded-full hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all"
            >
              Uber Eats
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 text-xs uppercase tracking-wider rounded-full hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all"
            >
              Just Eat
            </a>
          </div>
          <p className="text-white/15 font-light text-[10px] mt-2">Sustituye los enlaces con los de tu perfil si estás dado de alta</p>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0 rotate-180" />
    </section>
  )
}
