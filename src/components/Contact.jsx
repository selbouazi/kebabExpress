import { motion } from 'framer-motion'
import { Phone, MessageCircle, Clock, MapPin, ChevronRight } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'
import { scheduleData } from '../data/scheduleData'
import { dayNames } from '../data/constants'
import SectionLayout from './SectionLayout'
import ContactForm from './ContactForm'
import { SocialLinks } from './SocialLinks'

const contactCards = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contactInfo.phone,
    href: contactInfo.whatsapp,
    external: true,
    delay: 0,
  },
  {
    icon: Phone,
    label: 'Llámanos',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phoneRaw}`,
    external: false,
    delay: 1,
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: null,
    href: contactInfo.mapsUrl,
    external: true,
    delay: 2,
  },
  {
    icon: null,
    label: 'Síguenos',
    value: null,
    href: null,
    external: false,
    delay: 3,
    social: true,
  },
  {
    icon: null,
    label: 'Horario',
    value: null,
    href: null,
    external: false,
    delay: 4,
    schedule: true,
  },
]

export default function Contact() {
  const todayKey = Object.keys(dayNames).find(
    (k) => dayNames[k].toLowerCase() === new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase()
  )

  return (
    <SectionLayout id="contact" icon={MessageCircle} title="CONTACTO" bgColor="bg-charcoal-light">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
        {contactCards.map((card, i) => {
          if (card.social) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
                className="glass-card rounded-xl p-4 shadow-lg"
              >
                <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3 text-center">Síguenos</p>
                <SocialLinks className="justify-center [&_a]:bg-gold/10 [&_a]:text-gold [&_a]:ring-gold/20 [&_a]:hover:bg-gold [&_a]:hover:text-green-brand [&_a]:hover:ring-gold" />
              </motion.div>
            )
          }
          if (card.schedule) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
                className="glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="text-gold" size={14} />
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">Horario</p>
                </div>
                <div className="space-y-0.5">
                  {Object.entries(scheduleData).map(([day, schedule]) => (
                    <div
                      key={day}
                      className={`flex justify-between text-[11px] ${
                        day === todayKey ? 'text-gold font-medium' : 'text-white/50 font-light'
                      }`}
                    >
                      <span>{dayNames[day]}</span>
                      <span>{schedule.open} — {schedule.close}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          }
          const Wrapper = card.href ? motion.a : motion.div
          const wrapperProps = card.href
            ? {
                href: card.href,
                target: card.external ? '_blank' : undefined,
                rel: card.external ? 'noopener noreferrer' : undefined,
                whileHover: { y: -2, transition: { duration: 0.2 } },
              }
            : {}
          return (
            <Wrapper
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
              className={`glass-card rounded-xl p-4 shadow-lg ${card.href ? 'cursor-pointer' : ''}`}
              {...wrapperProps}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/20">
                  <card.icon className="text-gold" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white uppercase tracking-wide">{card.label}</p>
                  {card.value && <p className="text-white/50 font-light text-[11px] mt-0.5">{card.value}</p>}
                </div>
                {card.href && <ChevronRight size={14} className="text-gold/40 ml-auto flex-shrink-0" />}
              </div>
              {card.label === 'Dirección' && (
                <p className="text-white/45 font-light text-[11px] mt-2 pl-14">{contactInfo.address.city}</p>
              )}
            </Wrapper>
          )
        })}
      </div>

      <ContactForm />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="text-center mb-8"
      >
        <motion.a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(244, 196, 48, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary px-8 py-3.5 text-base"
        >
          <MessageCircle size={20} />
          Pide por WhatsApp
        </motion.a>
      </motion.div>

      {contactInfo.delivery && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white/40 font-light text-xs uppercase tracking-wider mb-3">O pide en</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: 'Glovo', url: contactInfo.delivery.glovo },
              { name: 'Uber Eats', url: contactInfo.delivery.uberEats },
              { name: 'Just Eat', url: contactInfo.delivery.justEat },
            ].filter(d => d.url).map(d => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 text-xs uppercase tracking-wider rounded-full hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all"
              >
                {d.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </SectionLayout>
  )
}
