import { ArrowLeft } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function Terminos() {
  return (
    <div className="min-h-screen bg-charcoal">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-paprika hover:underline mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-display text-cream mb-1 drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">Términos y Condiciones</h1>
        <p className="text-cream-muted/40 text-xs mb-8">Última actualización: 4 de agosto de 2026</p>

        <div className="space-y-6 text-cream-muted/70 text-sm leading-relaxed">
          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">1. Titular y ámbito de aplicación</p>
            <p className="text-cream-muted/60">
              Las presentes condiciones regulan el acceso y uso del sitio web de <strong className="text-cream">Express Kebab</strong>
              ({contactInfo.address.full}), así como la contratación de sus productos y servicios a través de los
              canales habilitados (teléfono, WhatsApp y formulario de contacto). El simple acceso al sitio otorga al
              usuario la condición de usuario de los mismos.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">2. Realización de pedidos</p>
            <p className="text-cream-muted/60">
              Los pedidos pueden realizarse por teléfono en el {contactInfo.phone}, por WhatsApp o a través del
              formulario de contacto de este sitio web. Al realizar un pedido, el cliente declara la veracidad de los
              datos facilitados. El pedido queda confirmado cuando Express Kebab lo acepta expresamente.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">3. Precios y pago</p>
            <p className="text-cream-muted/60">
              Los precios mostrados en el menú de este sitio web son precios de venta al público (PVP) con IVA
              incluido. Express Kebab se reserva el derecho de modificar los precios, el menú y las ofertas en
              cualquier momento, sin que ello afecte a los pedidos ya confirmados. El pago se realizará en el
              establecimiento o en el momento de la entrega, en efectivo o mediante los medios de pago disponibles.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">4. Entrega y recogida</p>
            <p className="text-cream-muted/60">
              El servicio de domicilio se presta en la zona de cobertura indicada y estará sujeto a las condiciones de
              entrega vigentes. El cliente debe facilitar una dirección correcta y estar localizable en el momento de
              la entrega. Los tiempos de entrega son orientativos y pueden variar en función de la demanda y las
              condiciones del tráfico.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">5. Alérgenos e intolerancias</p>
            <p className="text-cream-muted/60">
              Los productos pueden contener alérgenos. La información relativa a alérgenos se indica en el menú y está
              disponible en el establecimiento. En caso de alergias o intolerancias, el cliente deberá informar al
              personal antes de realizar el pedido.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">6. Propiedad intelectual</p>
            <p className="text-cream-muted/60">
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño y estructura) son titularidad de
              Express Kebab o se dispone de los derechos necesarios para su uso. Queda prohibida su reproducción,
              distribución o comunicación pública sin autorización expresa.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">7. Responsabilidad</p>
            <p className="text-cream-muted/60">
              Express Kebab no se hace responsable de los daños derivados del mal uso del sitio web, de interrupciones
              del servicio por causas ajenas a su voluntad, ni de los contenidos o servicios de los sitios externos
              enlazados (WhatsApp, Google Maps, redes sociales).
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-2">8. Legislación aplicable y jurisdicción</p>
            <p className="text-cream-muted/60">
              Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten
              a los juzgados y tribunales de la ciudad de El Vendrell (Tarragona), salvo que la normativa de
              consumidores y usuarios disponga otra cosa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}