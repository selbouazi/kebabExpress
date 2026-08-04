import { ArrowLeft } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-charcoal">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-paprika hover:underline mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-display text-cream mb-1 drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">Aviso Legal</h1>
        <p className="text-cream-muted/40 text-xs mb-8">Última actualización: 4 de agosto de 2026</p>
        <div className="space-y-6 text-cream-muted/70 text-sm leading-relaxed">
          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Titular del sitio web</p>
            <p className="text-cream-muted/60">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), a continuación se
              exponen los datos identificativos del titular del sitio web.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3 text-cream-muted/60">
              <li><strong className="text-cream">Nombre del negocio:</strong> Express Kebab</li>
              <li><strong className="text-cream">Dirección:</strong> {contactInfo.address.full}</li>
              <li><strong className="text-cream">Teléfono:</strong> {contactInfo.phone}</li>
              <li><strong className="text-cream">Email:</strong> {contactInfo.email}</li>
            </ul>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Propiedad intelectual</p>
            <p className="text-cream-muted/60">
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, estructura) son propiedad de
              Express Kebab o se dispone de los derechos necesarios para su uso. Queda prohibida la reproducción,
              distribución o comunicación pública, total o parcial, sin autorización expresa del titular conforme a la
              normativa vigente de propiedad intelectual.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Exención de responsabilidad</p>
            <p className="text-cream-muted/60">
              Express Kebab no se responsabiliza de los posibles errores u omisiones en los contenidos del sitio web,
              ni de los daños derivados de su uso o de la contratación de servicios a través del mismo. El sitio se
              mantiene con carácter informativo; los precios, horarios y ofertas pueden sufrir modificaciones sin
              previo aviso.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Enlaces a terceros</p>
            <p className="text-cream-muted/60">
              El sitio contiene enlaces a plataformas externas (WhatsApp, Google Maps, redes sociales) cuyo contenido
              y políticas no son responsabilidad de Express Kebab. El acceso a dichos servicios se realiza bajo la
              responsabilidad del propio usuario.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Legislación aplicable y jurisdicción</p>
            <p className="text-cream-muted/60">
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada de
              la utilización de este sitio web, las partes se someten a los juzgados y tribunales de la ciudad de
              El Vendrell (Tarragona), salvo que la ley disponga otra cosa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}