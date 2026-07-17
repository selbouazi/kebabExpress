import { useState } from 'react'
import { Star } from 'lucide-react'
import menuData from '../data/menuData'

const allergenLabels = {
  gluten: 'Contiene gluten',
  lacteos: 'Contiene lácteos',
  sesamo: 'Contiene sésamo',
  'frutos-secos': 'Contiene frutos secos',
}

const allergenColors = {
  gluten: 'bg-yellow-100 text-yellow-800',
  lacteos: 'bg-blue-100 text-blue-800',
  sesamo: 'bg-purple-100 text-purple-800',
  'frutos-secos': 'bg-orange-100 text-orange-800',
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category)
  const activeMenu = menuData.find((m) => m.category === activeCategory)

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#1C0F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-4">
            Nuestra
            <br />
            <span className="text-[#D94A2B]">Carta</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Descubre nuestros platos, todos preparados con ingredientes frescos y especias auténticas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.category
                  ? 'bg-[#D94A2B] text-white shadow-lg shadow-[#D94A2B]/25'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMenu?.items.map((item) => (
            <div
              key={item.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-[#D94A2B]/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/imagenPredeterminada.webp"
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <span className="text-[#F5A623] font-bold text-lg whitespace-nowrap">
                    {item.price.toFixed(2)}€
                  </span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-3">{item.description}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {item.allergens.map((a) => (
                    <span
                      key={a}
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${allergenColors[a] || 'bg-gray-100 text-gray-800'}`}
                      title={allergenLabels[a]}
                    >
                      {a}
                    </span>
                  ))}
                  {item.isBestSeller && (
                    <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#F5A623]/20 text-[#F5A623] font-medium">
                      <Star size={10} />
                      Más vendido
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
