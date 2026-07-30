import { motion } from 'framer-motion'
import { MessageCircle, UtensilsCrossed } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function MobileStickyBar() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-green-brand/95 backdrop-blur-xl border-t border-gold/20 px-4 py-2.5 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        <motion.button
          onClick={() => scrollTo('#menu')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gold/30 text-gold text-xs uppercase tracking-widest rounded-full font-medium hover:bg-gold/10 transition-colors"
        >
          <UtensilsCrossed size={14} />
          Ver menú
        </motion.button>
        <motion.a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, boxShadow: '0 0 16px rgba(244, 196, 48, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gold text-green-brand text-xs uppercase tracking-widest rounded-full font-semibold hover:bg-gold-dark transition-colors shadow-lg"
        >
          <MessageCircle size={14} />
          Pide por WhatsApp
        </motion.a>
      </div>
    </motion.div>
  )
}
