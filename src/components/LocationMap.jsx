import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock } from 'lucide-react'
import { useOpenStatus } from '../context/OpenStatusContext'
import { contactInfo } from '../data/restaurantData'
import SectionLayout from './SectionLayout'

export default function LocationMap() {
  const isOpen = useOpenStatus()

  return (
    <SectionLayout id="location" icon={MapPin} title="DÓNDE ESTAMOS" bgColor="bg-charcoal">
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-2 rounded-xl overflow-hidden border border-gold/20 h-[340px] lg:h-[400px] relative shadow-xl shadow-black/20"
        >
          <iframe
            src={contactInfo.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Express Kebab"
            className="w-full h-full transition-all duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent h-16 pointer-events-none" />
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-charcoal/80 backdrop-blur-sm border border-gold/20 text-cream/80 text-tiny px-2.5 py-1 rounded-full hover:text-gold transition-colors"
          >
            <Navigation size={10} className="text-gold" />
            Ver en Google Maps
          </a>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: MapPin,
              iconBg: 'bg-gold/15 ring-gold/20',
              iconColor: 'text-gold',
              content: (
                <>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Dirección</h3>
                  <p className="text-white/60 font-light text-xs mt-1 leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}
                  </p>
                  <a
                    href={contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold font-medium text-xs mt-2 hover:text-gold-dark transition-colors group"
                  >
                    <Navigation size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    Cómo llegar
                  </a>
                </>
              ),
            },
            {
              icon: Clock,
              iconBg: 'bg-green-400/10 ring-green-400/20',
              iconColor: 'text-green-400',
              content: (
                <>
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'} `} />
                    <span className={`font-medium text-xs uppercase tracking-wider ${isOpen ? 'text-green-300' : 'text-red-300'}`}>
                      {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
                    </span>
                  </div>
                  <p className="text-white/45 font-light text-xs mt-1">
                    {isOpen ? 'Te esperamos. Pide para llevar o come aquí.' : 'Consulta nuestro horario'}
                  </p>
                </>
              ),
            },
            {
              icon: null,
              iconBg: 'bg-gold/15 ring-gold/20',
              iconColor: 'text-gold',
              content: (
                <>
                  <p className="text-white font-semibold text-xs uppercase tracking-wide">Referencias</p>
                  <p className="text-white/45 font-light text-xs mt-1 leading-relaxed">
                    Cerca de la N-340, a 5 min de la playa de Coma-ruga
                  </p>
                </>
              ),
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 shadow-lg"
            >
              <div className={`flex items-start gap-4 ${i === 1 ? 'items-center' : ''} ${i === 2 ? 'items-center' : ''}`}>
                {card.icon && (
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ring-1 ${card.iconBg}`}>
                    <card.icon className={card.iconColor} size={20} />
                  </div>
                )}
                {!card.icon && (
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ring-1 ${card.iconBg}`}>
                    <span className={`${card.iconColor} text-lg font-bold`}>i</span>
                  </div>
                )}
                <div className="min-w-0">{card.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
