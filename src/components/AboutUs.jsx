import { Flame, Leaf, Clock, Heart } from 'lucide-react'

const values = [
  {
    icon: Flame,
    title: 'Recetas tradicionales',
    description: 'Cada plato sigue recetas auténticas pakistaníes transmitidas de generación en generación.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes frescos',
    description: 'Seleccionamos los ingredientes más frescos cada día para garantizar el mejor sabor.',
  },
  {
    icon: Clock,
    title: 'Servicio rápido',
    description: 'Sabemos que tienes hambre. Nuestro equipo prepara tu pedido en menos de 10 minutos.',
  },
  {
    icon: Heart,
    title: 'Hecho con pasión',
    description: 'Cocinamos con el corazón para ofrecerte una experiencia gastronómica inolvidable.',
  },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFF7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C0F0A] font-heading leading-tight mb-6">
              Sobre
              <br />
              <span className="text-[#D94A2B]">Nosotros</span>
            </h2>
            <div className="space-y-4 text-[#2D2017]/80 leading-relaxed">
              <p>
                Kebab Express nace de la pasión por compartir los auténticos sabores de Pakistán con nuestra comunidad. 
                Desde nuestro primer día, nos hemos comprometido a ofrecer una experiencia culinaria que transporta 
                directamente a las calles de Lahore y Karachi.
              </p>
              <p>
                Nuestro equipo de cocineros, formado en las mejores tradiciones pakistaníes, prepara cada plato 
                con especias cuidadosamente seleccionadas y recetas que han perfeccionado durante años.
              </p>
              <p>
                Creemos que la buena comida une a las personas, y no hay nada como un kebab recién hecho para 
                compartir momentos inolvidables.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/imagenPredeterminada.webp"
                alt="Kebab Express local"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#D94A2B] rounded-2xl p-6 shadow-xl hidden lg:block">
              <p className="text-white text-3xl font-bold font-heading">15+</p>
              <p className="text-white/80 text-sm">Platos artesanales</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2D2017]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D94A2B]/10 flex items-center justify-center mb-4">
                <value.icon className="text-[#D94A2B]" size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#1C0F0A] mb-2">{value.title}</h3>
              <p className="text-sm text-[#2D2017]/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
