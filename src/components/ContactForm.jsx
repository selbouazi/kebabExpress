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
    if (e.target._gotcha?.value) return
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
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 mx-auto"
          style={{ backgroundColor: 'rgba(193, 80, 46, 0.1)', boxShadow: 'inset 0 0 0 2px rgba(193, 80, 46, 0.08)' }}
        >
          <Send size={20} className="text-paprika" />
        </div>
        <h3 className="text-xl font-heading text-cream uppercase tracking-wider">Escríbenos</h3>
        <p className="text-cream-muted/50 font-body text-xs mt-1">Te responderemos en menos de 24h</p>
      </div>
      <form onSubmit={handleSubmit} noValidate className="glass-card rounded-xl p-6 shadow-lg space-y-4">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">No rellenar</label>
          <input
            id="contact-website"
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
        >
          <label htmlFor="contact-name" className="block text-cream-muted/50 font-body text-xs uppercase tracking-wider mb-1.5">Nombre</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full rounded-lg px-4 py-2.5 text-cream font-body text-sm placeholder:text-cream-muted/20 focus:outline-none transition-all"
            style={{
              backgroundColor: 'rgba(26, 20, 18, 0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#F2E8DC',
            }}
            placeholder="Tu nombre"
            onFocus={(e) => { e.target.style.borderColor = 'rgba(193, 80, 46, 0.4)'; e.target.style.boxShadow = '0 0 0 1px rgba(193, 80, 46, 0.15)' }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.06)'; e.target.style.boxShadow = 'none' }}
            aria-invalid={!!formErrors.name}
            aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
          />
          {formErrors.name && <p id="contact-name-error" className="text-paprika text-xs mt-1">{formErrors.name}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
        >
          <label htmlFor="contact-contact" className="block text-cream-muted/50 font-body text-xs uppercase tracking-wider mb-1.5">Teléfono o Email</label>
          <input
            id="contact-contact"
            name="contact"
            type="text"
            required
            autoComplete="off"
            value={formData.contact}
            onChange={(e) => updateField('contact', e.target.value)}
            className="w-full rounded-lg px-4 py-2.5 font-body text-sm placeholder:text-cream-muted/20 focus:outline-none transition-all"
            style={{
              backgroundColor: 'rgba(26, 20, 18, 0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#F2E8DC',
            }}
            placeholder="Teléfono o email"
            onFocus={(e) => { e.target.style.borderColor = 'rgba(193, 80, 46, 0.4)'; e.target.style.boxShadow = '0 0 0 1px rgba(193, 80, 46, 0.15)' }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.06)'; e.target.style.boxShadow = 'none' }}
            aria-invalid={!!formErrors.contact}
            aria-describedby={formErrors.contact ? 'contact-contact-error' : undefined}
          />
          {formErrors.contact && <p id="contact-contact-error" className="text-paprika text-xs mt-1">{formErrors.contact}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
        >
          <label htmlFor="contact-message" className="block text-cream-muted/50 font-body text-xs uppercase tracking-wider mb-1.5">Mensaje</label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            maxLength={2000}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            className="w-full rounded-lg px-4 py-2.5 font-body text-sm placeholder:text-cream-muted/20 focus:outline-none transition-all resize-none"
            style={{
              backgroundColor: 'rgba(26, 20, 18, 0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#F2E8DC',
            }}
            placeholder="Escribe tu mensaje..."
            onFocus={(e) => { e.target.style.borderColor = 'rgba(193, 80, 46, 0.4)'; e.target.style.boxShadow = '0 0 0 1px rgba(193, 80, 46, 0.15)' }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.06)'; e.target.style.boxShadow = 'none' }}
            aria-invalid={!!formErrors.message}
            aria-describedby={formErrors.message ? 'contact-message-error' : undefined}
          />
          {formErrors.message && <p id="contact-message-error" className="text-paprika text-xs mt-1">{formErrors.message}</p>}
        </motion.div>
        <motion.button
          type="submit"
          disabled={formStatus === 'sending'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 text-cream font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-paprika"
          style={{
            boxShadow: '0 2px 12px rgba(193, 80, 46, 0.2)',
          }}
        >
          {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        </motion.button>
        {formStatus === 'success' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            role="status" aria-live="polite"
            className="rounded-lg p-3 text-center"
            style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)', border: '1px solid rgba(74, 222, 128, 0.15)' }}
          >
            <p style={{ color: '#4ADE80' }} className="font-body text-sm">Mensaje enviado, te responderemos pronto.</p>
          </motion.div>
        )}
        {formStatus === 'error' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            role="alert" aria-live="assertive"
            className="rounded-lg p-3 text-center"
            style={{ backgroundColor: 'rgba(192, 64, 64, 0.08)', border: '1px solid rgba(192, 64, 64, 0.15)' }}
          >
            <p style={{ color: '#C04040' }} className="font-body text-sm">
              No se pudo enviar.{' '}
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: '#C1502E' }} className="underline">
                Escríbenos por WhatsApp
              </a>
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
