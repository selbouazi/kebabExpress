import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')
  const [formErrors, setFormErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (formData.name.trim().length < 2) errs.name = 'Mínimo 2 caracteres'
    if (!formData.contact.trim()) errs.contact = 'Campo obligatorio'
    else if (!/^[\d\s\-+()]+$/.test(formData.contact) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact))
      errs.contact = 'Teléfono o email no válido'
    if (formData.message.trim().length < 10) errs.message = 'Mínimo 10 caracteres'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setFormErrors(errs)
    if (Object.keys(errs).length) return
    setFormStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xjgnpple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', contact: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-xl mx-auto mb-12"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-3 mx-auto ring-2 ring-gold/10">
          <Send size={20} className="text-gold" />
        </div>
        <h3 className="text-xl font-display text-gold uppercase tracking-wider drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]">
          Escríbenos
        </h3>
        <p className="text-white/45 font-body text-xs mt-1">Te responderemos en menos de 24h</p>
      </div>
      <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 shadow-lg space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
        >
          <label htmlFor="contact-name" className="block text-white/60 font-body text-xs uppercase tracking-wider mb-1.5">Nombre</label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full bg-green-dark/50 border border-white/10 rounded-lg px-4 py-2.5 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
            placeholder="Tu nombre"
            aria-invalid={!!formErrors.name}
            aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
          />
          {formErrors.name && <p id="contact-name-error" className="text-red-cola text-xs mt-1">{formErrors.name}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
        >
          <label htmlFor="contact-contact" className="block text-white/60 font-body text-xs uppercase tracking-wider mb-1.5">Teléfono o Email</label>
          <input
            id="contact-contact"
            type="text"
            value={formData.contact}
            onChange={(e) => updateField('contact', e.target.value)}
            className="w-full bg-green-dark/50 border border-white/10 rounded-lg px-4 py-2.5 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
            placeholder="Teléfono o email"
            aria-invalid={!!formErrors.contact}
            aria-describedby={formErrors.contact ? 'contact-contact-error' : undefined}
          />
          {formErrors.contact && <p id="contact-contact-error" className="text-red-cola text-xs mt-1">{formErrors.contact}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
        >
          <label htmlFor="contact-message" className="block text-white/60 font-body text-xs uppercase tracking-wider mb-1.5">Mensaje</label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            className="w-full bg-green-dark/50 border border-white/10 rounded-lg px-4 py-2.5 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
            placeholder="Escribe tu mensaje..."
            aria-invalid={!!formErrors.message}
            aria-describedby={formErrors.message ? 'contact-message-error' : undefined}
          />
          {formErrors.message && <p id="contact-message-error" className="text-red-cola text-xs mt-1">{formErrors.message}</p>}
        </motion.div>
        <motion.button
          type="submit"
          disabled={formStatus === 'sending'}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(244, 196, 48, 0.3)' }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gold text-green-brand font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        </motion.button>
        {formStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            aria-live="polite"
            className="bg-green-500/15 border border-green-400/20 rounded-lg p-3 text-center"
          >
            <p className="text-green-300 font-body text-sm">Mensaje enviado, te responderemos pronto.</p>
          </motion.div>
        )}
        {formStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            aria-live="assertive"
            className="bg-red-cola/15 border border-red-cola/20 rounded-lg p-3 text-center"
          >
            <p className="text-red-300 font-body text-sm">
              No se pudo enviar.{' '}
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                Escríbenos por WhatsApp
              </a>
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
