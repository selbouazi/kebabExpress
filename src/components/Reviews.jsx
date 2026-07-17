import { Star, ExternalLink } from 'lucide-react'

const reviews = [
  {
    name: 'Laura G.',
    rating: 5,
    text: 'El mejor kebab que he probado fuera de Pakistán. La carne está increíblemente jugosa y las especias son auténticas. Volveré sin duda.',
  },
  {
    name: 'Carlos M.',
    rating: 5,
    text: 'Pedimos el menú familiar para llevar y fue todo un acierto. Rápido, bien empaquetado y cantidad generosa. Muy recomendable.',
  },
  {
    name: 'Aisha K.',
    rating: 5,
    text: 'Por fin un sitio que hace el auténtico sabor pakistaní. El kebab de cordero es espectacular y el mango lassi está de otro nivel.',
  },
  {
    name: 'Miguel R.',
    rating: 4,
    text: 'Muy buena relación calidad-precio. El servicio es rápido y el personal muy amable. El chai está delicioso.',
  },
]

export default function Reviews() {
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FFF7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C0F0A] font-heading leading-tight mb-4">
            Lo que dicen
            <br />
            <span className="text-[#D94A2B]">nuestros clientes</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-white shadow-lg rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(Number(averageRating)) ? 'text-[#F5A623] fill-[#F5A623]' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-[#1C0F0A] font-bold text-lg">{averageRating}</span>
            <span className="text-[#2D2017]/50 text-sm">basado en {reviews.length} reseñas</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#2D2017]/5"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'text-[#F5A623] fill-[#F5A623]' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-sm text-[#2D2017]/80 leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-sm font-semibold text-[#1C0F0A]">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://search.google.com/local/reviews?placeid=PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1C0F0A]/20 text-[#1C0F0A] rounded-full text-sm font-semibold hover:bg-[#1C0F0A]/5 transition-all duration-200"
          >
            <ExternalLink size={16} />
            Ver todas las reseñas
          </a>
          <a
            href="https://search.google.com/local/writereview?placeid=PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D94A2B] text-white rounded-full text-sm font-semibold hover:bg-[#c03d1f] transition-all duration-200 shadow-lg shadow-[#D94A2B]/25"
          >
            <Star size={16} />
            Déjanos tu reseña
          </a>
        </div>
      </div>
    </section>
  )
}
