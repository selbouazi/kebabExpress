import { ArrowLeft } from 'lucide-react'

export default function Cookies() {
  return (
    <div className="min-h-screen bg-green-dark">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-gold hover:underline mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-display text-gold mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">Política de Cookies</h1>
        <div className="space-y-6 text-white/80 text-sm leading-relaxed">
          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">¿Qué son las cookies?</p>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. 
              Permiten recordar tus preferencias y mejorar tu experiencia de navegación.
            </p>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Tipos de cookies que utilizamos</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li><strong className="text-white">Cookies técnicas:</strong> necesarias para el funcionamiento del sitio web (ej. navegación entre secciones).</li>
              <li><strong className="text-white">Cookies de análisis:</strong> utilizamos Vite en desarrollo; no se instalan cookies de terceros con fines analíticos sin tu consentimiento.</li>
            </ul>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Cookies de terceros</p>
            <p>
              Este sitio web puede incorporar contenido de terceros (Google Maps, Formspree) que pueden establecer 
              sus propias cookies. No tenemos control sobre estas cookies. Consulta sus políticas:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-white/70">
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  Google Maps — Política de privacidad
                </a>
              </li>
              <li>
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  Formspree — Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Gestionar las cookies</p>
            <p>
              Puedes configurar tu navegador para bloquear o eliminar cookies. A continuación, los enlaces 
              de ayuda de los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-white/70">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Safari</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
