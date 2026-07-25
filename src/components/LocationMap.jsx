import { MapPin, Navigation, Train, Car } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { contactInfo } from '../data/restaurantData'

export default function LocationMap() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="location" ref={sectionRef} className="relative py-32 lg:py-40 bg-ebony overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cinnabar/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <span className="text-cinnabar text-xs tracking-[0.3em] uppercase font-semibold">
            Ubicación
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-heading leading-[0.95] mt-6">
            Ven a
            <br />
            <span className="italic font-normal">visitarnos</span>
          </h2>
          <div className="w-12 h-px bg-cinnabar/30 mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-sm overflow-hidden border border-white/[0.04] h-[400px] lg:h-[500px] group">
            <iframe
              src={contactInfo.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kebab Express"
              className="opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
            />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-coffee/40 rounded-sm p-6 border border-white/[0.04] hover:border-cinnabar/20 transition-all duration-500 reveal">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-cinnabar/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-cinnabar" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Dirección</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}
                  </p>
                  <a
                    href={contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cinnabar text-xs tracking-wider uppercase font-medium mt-3 hover:underline group"
                  >
                    <Navigation size={12} className="group-hover:translate-x-1 transition-transform" />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-coffee/40 rounded-sm p-5 border border-white/[0.04] hover:border-gold/20 transition-all duration-500 reveal reveal-delay-1">
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center mb-3">
                  <Train className="text-gold" size={16} />
                </div>
                <p className="text-white font-semibold text-sm">Metro</p>
                <p className="text-white/30 text-xs mt-1">{contactInfo.metro}</p>
              </div>
              <div className="bg-coffee/40 rounded-sm p-5 border border-white/[0.04] hover:border-cinnabar/20 transition-all duration-500 reveal reveal-delay-2">
                <div className="w-10 h-10 rounded-sm bg-cinnabar/10 flex items-center justify-center mb-3">
                  <Car className="text-cinnabar" size={16} />
                </div>
                <p className="text-white font-semibold text-sm">Parking</p>
                <p className="text-white/30 text-xs mt-1">{contactInfo.parking}</p>
              </div>
            </div>

            <div className="bg-coffee/40 rounded-sm p-6 border border-white/[0.04] reveal reveal-delay-3">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-green-400" />
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                </span>
                <span className="text-green-400 text-xs tracking-wider uppercase font-medium">Abierto ahora</span>
              </div>
              <p className="text-white/30 text-sm font-light">
                Te esperamos en {contactInfo.address.street}. Ven cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
