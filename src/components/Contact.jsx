import { useState } from 'react'
import { MessageCircle, Phone, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import scheduleData from '../data/scheduleData'
import { contactInfo } from '../data/restaurantData'
import useScrollAnimation from '../hooks/useScrollAnimation'

const dayNames = {
  monday: 'Lunes', tuesday: 'Martes', wednesday: 'Miércoles',
  thursday: 'Jueves', friday: 'Viernes', saturday: 'Sábado', sunday: 'Domingo',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [status, setStatus] = useState('idle')
  const sectionRef = useScrollAnimation()

  const todayKey = Object.keys(dayNames).find(
    (k) => dayNames[k].toLowerCase() === new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase()
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.contact || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/meqyqkzj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', contact: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-40 bg-champagne overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cinnabar/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <span className="text-cinnabar text-xs tracking-[0.3em] uppercase font-semibold">
            Contacto
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ebony font-heading leading-[0.95] mt-6">
            Hable
            <br />
            <span className="italic font-normal">mos</span>
          </h2>
          <div className="w-12 h-px bg-cinnabar/30 mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex items-center gap-5 bg-white rounded-sm p-6 border border-ebony/[0.04] hover:shadow-2xl transition-all duration-500 group hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-sm bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 group-hover:scale-110 transition-all duration-500">
                <MessageCircle className="text-[#25D366]" size={26} />
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-ebony">WhatsApp</p>
                <p className="text-sm text-taupe font-light">{contactInfo.phone} — Respuesta en &lt;5 min</p>
              </div>
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-green-400" />
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
              </span>
            </a>

            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="reveal reveal-delay-1 flex items-center gap-5 bg-white rounded-sm p-6 border border-ebony/[0.04] hover:shadow-2xl transition-all duration-500 group hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-sm bg-cinnabar/10 flex items-center justify-center group-hover:bg-cinnabar/20 group-hover:scale-110 transition-all duration-500">
                <Phone className="text-cinnabar" size={26} />
              </div>
              <div>
                <p className="text-lg font-bold text-ebony">Llámanos</p>
                <p className="text-sm text-taupe font-light">{contactInfo.phone}</p>
              </div>
            </a>

            <div className="reveal reveal-delay-2 bg-white rounded-sm p-6 border border-ebony/[0.04]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center">
                  <Clock className="text-gold" size={18} />
                </div>
                <h3 className="text-lg font-bold text-ebony">Horario</h3>
              </div>
              <div className="space-y-1">
                {Object.entries(scheduleData).map(([day, schedule]) => (
                  <div
                    key={day}
                    className={`flex items-center justify-between text-sm p-2.5 rounded-sm transition-colors ${
                      day === todayKey ? 'bg-cinnabar/5 text-cinnabar' : 'text-taupe'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {dayNames[day]}
                      {day === todayKey && (
                        <span className="text-[8px] bg-cinnabar/10 text-cinnabar px-1.5 py-0.5 tracking-wider uppercase font-medium">
                          Hoy
                        </span>
                      )}
                    </span>
                    <span className={day === todayKey ? 'font-semibold' : 'font-medium'}>
                      {schedule.open} — {schedule.close}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-3 bg-white rounded-sm p-6 border border-ebony/[0.04]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-cinnabar/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cinnabar">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ebony">{contactInfo.address.street}</p>
                  <p className="text-xs text-taupe mt-0.5">{contactInfo.address.city}</p>
                  <p className="text-xs text-taupe mt-1">{contactInfo.metro}</p>
                  <a
                    href={contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cinnabar text-xs font-medium mt-2 inline-block hover:underline"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-4">
            <div className="bg-white rounded-sm p-8 lg:p-10 border border-ebony/[0.04] sticky top-28">
              <h3 className="text-xl font-bold text-ebony mb-8 font-heading">
                Envíanos un mensaje
              </h3>

              {status === 'success' ? (
                <div className="bg-green-50 rounded-sm p-10 text-center border border-green-100">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <p className="text-green-700 font-bold text-lg mb-2 font-heading">¡Enviado!</p>
                  <p className="text-green-600/70 text-sm font-light">Te responderemos en menos de 24h.</p>
                </div>
              ) : status === 'error' ? (
                <div className="bg-red-50 rounded-sm p-10 text-center border border-red-100">
                  <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                  <p className="text-red-700 font-bold text-lg mb-2 font-heading">Error</p>
                  <p className="text-red-600/70 text-sm mb-5 font-light">Intenta de nuevo o escríbenos por WhatsApp.</p>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs tracking-wider uppercase font-medium hover:bg-[#1da851] transition-colors"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    required
                    minLength={2}
                    className="w-full px-4 py-3.5 rounded-sm border border-ebony/10 bg-champagne text-ebony placeholder:text-taupe/40 focus:outline-none focus:ring-1 focus:ring-cinnabar/30 focus:border-cinnabar transition-all duration-200 text-sm"
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Teléfono o email"
                    value={form.contact}
                    onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
                    required
                    className="w-full px-4 py-3.5 rounded-sm border border-ebony/10 bg-champagne text-ebony placeholder:text-taupe/40 focus:outline-none focus:ring-1 focus:ring-cinnabar/30 focus:border-cinnabar transition-all duration-200 text-sm"
                  />
                  <textarea
                    name="message"
                    placeholder="¿Qué te gustaría pedir o consultar?"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    required
                    minLength={10}
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-sm border border-ebony/10 bg-champagne text-ebony placeholder:text-taupe/40 focus:outline-none focus:ring-1 focus:ring-cinnabar/30 focus:border-cinnabar transition-all duration-200 text-sm resize-none"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-cinnabar text-white text-xs tracking-[0.15em] uppercase font-semibold rounded-sm hover:bg-[#a8321a] transition-all duration-500 hover:shadow-xl hover:shadow-cinnabar/20 disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando
                      </span>
                    ) : (
                      <>
                        <Send size={14} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
