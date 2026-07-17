import { useState } from 'react'
import { Phone, MessageCircle, Clock, Send } from 'lucide-react'
import scheduleData from '../data/scheduleData'

const dayNames = {
  monday: 'Lunes',
  tuesday: 'Martes',
  wednesday: 'Miércoles',
  thursday: 'Jueves',
  friday: 'Viernes',
  saturday: 'Sábado',
  sunday: 'Domingo',
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.contact || !formData.message) return
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/TU_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', contact: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFF7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C0F0A] font-heading leading-tight mb-4">
            Hable<span className="text-[#D94A2B]">mos</span>
          </h2>
          <p className="text-[#2D2017]/60 text-lg max-w-xl mx-auto">
            ¿Tienes hambre? Contáctanos por el canal que prefieras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <a
              href="https://wa.me/34XXXXXXXXX?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-[#2D2017]/5 hover:shadow-xl transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="text-[#25D366]" size={28} />
              </div>
              <div>
                <p className="text-lg font-bold text-[#1C0F0A]">WhatsApp</p>
                <p className="text-sm text-[#2D2017]/60">Respuesta en menos de 5 minutos</p>
              </div>
            </a>

            <a
              href="tel:+34000000000"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-[#2D2017]/5 hover:shadow-xl transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D94A2B]/10 flex items-center justify-center group-hover:bg-[#D94A2B]/20 transition-colors">
                <Phone className="text-[#D94A2B]" size={28} />
              </div>
              <div>
                <p className="text-lg font-bold text-[#1C0F0A]">Llámanos</p>
                <p className="text-sm text-[#2D2017]/60">+34 000 000 000</p>
              </div>
            </a>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#2D2017]/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center">
                  <Clock className="text-[#F5A623]" size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#1C0F0A]">Horario</h3>
              </div>
              <div className="space-y-2">
                {Object.entries(scheduleData).map(([day, schedule]) => (
                  <div key={day} className="flex items-center justify-between text-sm">
                    <span className="text-[#2D2017]/70">{dayNames[day]}</span>
                    <span className="text-[#1C0F0A] font-medium">
                      {schedule.open} - {schedule.close}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#2D2017]/5">
            <h3 className="text-xl font-bold text-[#1C0F0A] mb-6">Envíanos un mensaje</h3>

            {status === 'success' ? (
              <div className="bg-[#6B8F6B]/10 rounded-xl p-6 text-center">
                <p className="text-[#6B8F6B] font-semibold text-lg mb-2">¡Mensaje enviado!</p>
                <p className="text-[#2D2017]/60 text-sm">Te responderemos lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-3 rounded-xl border border-[#2D2017]/10 bg-[#FFF7EF] text-[#1C0F0A] placeholder:text-[#2D2017]/40 focus:outline-none focus:ring-2 focus:ring-[#D94A2B]/30 focus:border-[#D94A2B] transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Teléfono o email"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#2D2017]/10 bg-[#FFF7EF] text-[#1C0F0A] placeholder:text-[#2D2017]/40 focus:outline-none focus:ring-2 focus:ring-[#D94A2B]/30 focus:border-[#D94A2B] transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tu mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#2D2017]/10 bg-[#FFF7EF] text-[#1C0F0A] placeholder:text-[#2D2017]/40 focus:outline-none focus:ring-2 focus:ring-[#D94A2B]/30 focus:border-[#D94A2B] transition-all duration-200 resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm">
                    Hubo un error al enviar el mensaje. Puedes escribirnos directamente por WhatsApp.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D94A2B] text-white rounded-xl text-sm font-semibold hover:bg-[#c03d1f] transition-all duration-200 shadow-lg shadow-[#D94A2B]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
