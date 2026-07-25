import { MapPin, Navigation, Clock } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { contactInfo } from '../data/restaurantData'

export default function LocationMap() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="location" ref={sectionRef} className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-green-dark section-pattern overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 mb-4 mx-auto ring-2 ring-gold/10">
            <MapPin size={30} className="text-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            DÓNDE ESTAMOS
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold/60 text-lg">✦</span>
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-gold/20 h-[340px] lg:h-[400px] relative shadow-xl shadow-black/20">
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-dark/80 to-transparent h-16 pointer-events-none" />
          </div>

          <div className="space-y-4">
            <div className="reveal glass-card rounded-xl p-5 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/20">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div className="min-w-0">
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
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-1 glass-card rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center flex-shrink-0 ring-1 ring-green-400/20">
                  <Clock className="text-green-400" size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 font-medium text-xs uppercase tracking-wider">Abierto ahora</span>
                  </div>
                  <p className="text-white/45 font-light text-xs mt-1">
                    Te esperamos. Pide para llevar o come aquí.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2 glass-card rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/20">
                  <span className="text-gold text-lg font-bold">i</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-xs uppercase tracking-wide">Referencias</p>
                  <p className="text-white/45 font-light text-xs mt-1 leading-relaxed">
                    Cerca de la N-340, a 5 min de la playa de Coma-ruga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0 rotate-180" />
    </section>
  )
}
