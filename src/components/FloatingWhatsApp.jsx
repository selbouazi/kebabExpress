import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34XXXXXXXXX?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow group"
      aria-label="Pedir por WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-fire rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
        1
      </span>
    </a>
  )
}
