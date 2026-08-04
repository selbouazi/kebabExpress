import { ArrowLeft } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function Cookies() {
  return (
    <div className="min-h-screen bg-charcoal">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-paprika hover:underline mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-display text-cream mb-1 drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">Política de Cookies</h1>
        <p className="text-cream-muted/40 text-xs mb-8">Última actualización: 4 de agosto de 2026</p>

        <div className="space-y-6 text-cream-muted/70 text-sm leading-relaxed">
          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">1. Responsable</p>
            <p className="text-cream-muted/60">
              <strong className="text-cream">Express Kebab</strong>, con domicilio en {contactInfo.address.full},
              teléfono {contactInfo.phone} y correo {contactInfo.email}, es el responsable del tratamiento de los
              datos recabados mediante cookies conforme al Reglamento (UE) 2016/679 (RGPD) y al art. 22 de la
              Ley 34/2002 (LSSI-CE).
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">2. Cookies utilizadas</p>
            <p className="text-cream-muted/60">
              Este sitio web no instala cookies propias con fines publicitarios ni de segmentación. Solo se utiliza
              el almacenamiento estrictamente necesario para la navegación (cookies técnicas) y se cargan servicios
              de terceros que pueden establecer sus propias cookies al visitar la página.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-paprika/20">
                    <th className="py-2 pr-3 font-semibold text-cream">Tipo</th>
                    <th className="py-2 pr-3 font-semibold text-cream">Finalidad</th>
                    <th className="py-2 pr-3 font-semibold text-cream">Titularidad</th>
                  </tr>
                </thead>
                <tbody className="text-cream-muted/60">
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-3">Técnicas / necesarias</td>
                    <td className="py-2 pr-3">Funcionamiento y navegación entre secciones del sitio web</td>
                    <td className="py-2 pr-3">Propias</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-3">Terceros (contenido embebido)</td>
                    <td className="py-2 pr-3">Mapa de ubicación y tipografías</td>
                    <td className="py-2 pr-3">OpenStreetMap y Google Fonts</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-3">Terceros (enlaces externos)</td>
                    <td className="py-2 pr-3">Ubicación y envío de formularios</td>
                    <td className="py-2 pr-3">Google Maps y Formspree</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-cream-muted/60 mt-3">
              No se utilizan cookies de análisis ni de marketing; por tanto, no se realiza seguimiento de la
              actividad de los usuarios con fines comerciales.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">3. Cookies de terceros</p>
            <ul className="list-disc pl-6 space-y-1 text-cream-muted/60">
              <li>
                <strong className="text-cream">Google Maps</strong> —{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">policies.google.com/privacy</a>
              </li>
              <li>
                <strong className="text-cream">OpenStreetMap</strong> —{" "}
                <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">osmfoundation.org/wiki/Privacy_Policy</a>
              </li>
              <li>
                <strong className="text-cream">Formspree</strong> —{" "}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">formspree.io/legal/privacy-policy/</a>
              </li>
              <li>
                <strong className="text-cream">Google Fonts</strong> —{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">policies.google.com/privacy</a>
              </li>
            </ul>
            <p className="text-cream-muted/60 mt-2">
              Express Kebab no controla el contenido ni las cookies de estos prestadores. Se recomienda consultar sus
              respectivas políticas de privacidad y cookies.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">4. Consentimiento</p>
            <p className="text-cream-muted/60">
              El uso de las cookies técnicas no requiere consentimiento previo (art. 22.2 LSSI-CE). En cuanto a las
              cookies de terceros, la carga de los servicios embebidos está supeditada al consentimiento que otorgues
              al navegar por este sitio, pudiendo gestionarse en todo momento las preferencias desde tu navegador.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">5. Gestión, bloqueo y revocación</p>
            <p className="text-cream-muted/60">
              Puedes configurar tu navegador para bloquear, eliminar o advertir sobre la instalación de cookies:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-cream-muted/60">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Safari</a></li>
            </ul>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">6. Contacto y actualización</p>
            <p className="text-cream-muted/60">
              Para cualquier cuestión sobre esta política o para ejercer tus derechos de acceso, rectificación,
              supresión, limitación, portabilidad y oposición, puedes escribir a{" "}
              <a href={`mailto:${contactInfo.email}`} className="text-gold hover:underline">{contactInfo.email}</a>.
              Esta política podrá ser actualizada cuando se produzcan cambios en los servicios o en la normativa
              aplicable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}