import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { contactInfo } from '../data/restaurantData'
import { scheduleData } from '../data/menuData'

const dayNames = {
  monday: 'Lunes', tuesday: 'Martes', wednesday: 'Miércoles',
  thursday: 'Jueves', friday: 'Viernes', saturday: 'Sábado', sunday: 'Domingo',
}

export default function Contact() {
  const sectionRef = useScrollAnimation()

  const todayKey = Object.keys(dayNames).find(
    (k) => dayNames[k].toLowerCase() === new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase()
  )

  return (
    <section id="contact" ref={sectionRef} className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-green-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 mb-4 mx-auto">
            <MessageCircle size={28} className="text-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            CONTACTO
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex items-center gap-3 bg-gradient-to-b from-green-card to-green-dark/90 border border-gold/20 rounded-lg p-4 hover:border-gold/60 hover:shadow-lg transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="text-[#25D366]" size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wide">WhatsApp</p>
              <p className="text-white/50 font-light text-xs">{contactInfo.phone}</p>
            </div>
          </a>

          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className="reveal reveal-delay-1 flex items-center gap-3 bg-gradient-to-b from-green-card to-green-dark/90 border border-gold/20 rounded-lg p-4 hover:border-gold/60 hover:shadow-lg transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
              <Phone className="text-gold" size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wide">Llámanos</p>
              <p className="text-white/50 font-light text-xs">{contactInfo.phone}</p>
            </div>
          </a>

          <div className="reveal reveal-delay-2 bg-gradient-to-b from-green-card to-green-dark/90 border border-gold/20 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-gold" size={16} />
              <p className="text-sm font-semibold text-white uppercase tracking-wide">Horario</p>
            </div>
            <div className="space-y-0.5">
              {Object.entries(scheduleData).map(([day, schedule]) => (
                <div
                  key={day}
                  className={`flex justify-between text-xs ${
                    day === todayKey ? 'text-gold font-medium' : 'text-white/50 font-light'
                  }`}
                >
                  <span>{dayNames[day]}</span>
                  <span>{schedule.open} — {schedule.close}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-3 bg-gradient-to-b from-green-card to-green-dark/90 border border-gold/20 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-gold" size={16} />
              <p className="text-sm font-semibold text-white uppercase tracking-wide">Dirección</p>
            </div>
            <p className="text-white/60 font-light text-xs">{contactInfo.address.street}</p>
            <p className="text-white/45 font-light text-xs">{contactInfo.address.city}</p>
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-medium text-xs mt-1.5 inline-block hover:underline"
            >
              Cómo llegar →
            </a>
          </div>
        </div>

        <div className="text-center reveal reveal-delay-4">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-green-brand font-semibold text-base uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <MessageCircle size={20} />
            Pide por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
