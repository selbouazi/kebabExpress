import { MapPin, Navigation, Train, Car } from 'lucide-react'

export default function LocationMap() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#1C0F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-4">
            Encuéntra<span className="text-[#D94A2B]">nos</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Estamos en el corazón de la ciudad. Te esperamos con los mejores kebabs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiAwwrAwMCcwMC4wIkU!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Kebab Express"
              className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D94A2B]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#D94A2B]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Dirección</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Calle Ejemplo, 123<br />
                    28000 Madrid
                  </p>
                  <a
                    href="https://maps.google.com/?q=Calle+Ejemplo+123+Madrid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#D94A2B] text-sm font-medium mt-2 hover:underline"
                  >
                    <Navigation size={14} />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623]/20 flex items-center justify-center mb-2">
                  <Train className="text-[#F5A623]" size={16} />
                </div>
                <p className="text-white font-semibold text-sm">Metro</p>
                <p className="text-white/50 text-xs">Línea 1 - Estación Centro</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#6B8F6B]/20 flex items-center justify-center mb-2">
                  <Car className="text-[#6B8F6B]" size={16} />
                </div>
                <p className="text-white font-semibold text-sm">Parking</p>
                <p className="text-white/50 text-xs">Parking público a 50m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
