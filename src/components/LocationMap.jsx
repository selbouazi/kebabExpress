import { MapPin, Navigation } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { contactInfo } from '../data/restaurantData'

export default function LocationMap() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="location" ref={sectionRef} className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 mb-4 mx-auto">
            <MapPin size={28} className="text-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            DÓNDE ESTAMOS
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded overflow-hidden border-2 border-gold/25 h-[320px] lg:h-[380px] relative">
            <iframe
              src={contactInfo.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.7) sepia(0.3) hue-rotate(80deg) saturate(0.4) brightness(0.85)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Express Kebab"
              className="w-full h-full transition-all duration-500"
            />
          </div>

          <div className="space-y-3">
            <div className="reveal bg-gradient-to-b from-green-card to-green-dark/90 border border-gold/20 rounded p-5 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Dirección</h3>
                  <p className="text-white/60 font-light text-xs mt-1 leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}
                  </p>
                  <a
                    href={contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold font-medium text-xs mt-2 hover:underline"
                  >
                    <Navigation size={12} />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-1 bg-gradient-to-b from-green-card to-green-dark/90 border border-gold/20 rounded p-5 shadow-md">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 font-medium text-xs uppercase tracking-wider">Abierto ahora</span>
              </div>
              <p className="text-white/50 font-light text-xs mt-1">
                Te esperamos. Pide para llevar o come aquí.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
