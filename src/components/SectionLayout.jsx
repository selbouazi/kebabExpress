import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const SectionLayout = forwardRef(({ id, icon: Icon, title, subtitle, children, bgColor = 'bg-green-dark' }, ref) => {
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative pt-16 pb-20 sm:pt-20 sm:pb-24 ${bgColor} section-pattern overflow-hidden`}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 mb-4 mx-auto ring-2 ring-gold/10">
            <Icon size={30} className="text-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold/60 text-lg">✦</span>
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          {subtitle && (
            <p className="text-white/50 font-body text-sm mt-3 tracking-wide max-w-md mx-auto">{subtitle}</p>
          )}
        </motion.div>

        {children}
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0 rotate-180" />
    </motion.section>
  )
})

export default SectionLayout
