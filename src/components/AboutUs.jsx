import { ChefHat, Leaf, Award, Heart } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { teamMembers, whyUs } from '../data/restaurantData'

const iconMap = { chef: ChefHat, spices: Leaf, award: Award, family: Heart }

export default function AboutUs() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-40 bg-ebony overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cinnabar/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 lg:mb-20 reveal">
          <span className="text-cinnabar text-xs tracking-[0.3em] uppercase font-semibold">El equipo</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-heading leading-[0.95] mt-6">
            Quiénes<br /><span className="italic font-normal">cocinan</span>
          </h2>
          <div className="w-12 h-px bg-cinnabar/30 mx-auto mt-8" />
          <p className="text-white/30 text-sm max-w-lg mx-auto mt-6 font-light leading-relaxed">
            Detrás de cada plato hay personas que ponen todo su conocimiento y pasión para que tu experiencia sea inolvidable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-24">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="reveal group bg-coffee/40 rounded-sm border border-white/[0.04] overflow-hidden hover:border-cinnabar/20 transition-all duration-500"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-[#2A1F18] to-[#1A0F0A] overflow-hidden relative">
                <img
                  src="/placeholder.svg"
                  alt=""
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="p-5 space-y-2">
                <div>
                  <p className="text-white font-bold text-base font-heading">{member.name}</p>
                  <p className="text-cinnabar text-[10px] tracking-wider uppercase font-medium mt-0.5">{member.role}</p>
                </div>
                <p className="text-white/40 text-xs leading-relaxed font-light">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10 reveal">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Por qué elegirnos</span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-[0.95] mt-4">
            La diferencia<br /><span className="italic font-normal">Kebab Express</span>
          </h3>
          <div className="w-12 h-px bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((r, i) => {
            const Icon = iconMap[r.icon] || ChefHat
            return (
              <div
                key={i}
                className="reveal group bg-coffee/40 rounded-sm p-8 border border-white/[0.04] hover:border-gold/20 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-sm bg-cinnabar/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="text-cinnabar" size={22} />
                </div>
                <h4 className="text-white font-bold text-base mb-3">{r.title}</h4>
                <p className="text-white/35 text-sm leading-relaxed font-light">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
