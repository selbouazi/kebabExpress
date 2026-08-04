import { ArrowLeft } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-charcoal">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-paprika hover:underline mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-display text-cream mb-1 drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">Política de Privacidad</h1>
        <p className="text-cream-muted/40 text-xs mb-8">Última actualización: 4 de agosto de 2026</p>
        <div className="space-y-6 text-cream-muted/70 text-sm leading-relaxed">
          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Responsable del tratamiento</p>
            <p className="text-cream-muted/60">
              Express Kebab es el responsable del tratamiento de los datos personales facilitados a través de este
              sitio web, de acuerdo con el Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la
              Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de Derechos Digitales (LOPDGDD).
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Datos recogidos</p>
            <p className="text-cream-muted/60">
              A través del formulario de contacto se recogen los siguientes datos: nombre, teléfono o email y mensaje.
              Estos datos se utilizan exclusivamente para responder a las consultas del usuario. No se recaban datos de
              carácter personal sin que el usuario los facilite voluntariamente.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Finalidad y base de legitimación</p>
            <ul className="list-disc pl-6 space-y-1 text-cream-muted/60">
              <li>Responder a las consultas y solicitudes realizadas a través del formulario de contacto.</li>
              <li>Gestionar pedidos realizados a través de WhatsApp.</li>
              <li>
                No se realizan comunicaciones comerciales sin consentimiento expreso del usuario.
              </li>
            </ul>
            <p className="text-cream-muted/60 mt-2">
              La base legal del tratamiento es el consentimiento del interesado (art. 6.1.a) RGPD), otorgado al
              enviar el formulario, o la ejecución de una relación precontractual en el caso de pedidos.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Conservación de datos</p>
            <p className="text-cream-muted/60">
              Los datos se conservarán durante el tiempo necesario para atender la consulta o gestionar el pedido y,
              posteriormente, durante el plazo legalmente establecido para el cumplimiento de obligaciones legales.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Destinatarios y servicios de terceros</p>
            <p className="text-cream-muted/60">
              Los datos del formulario de contacto se procesan a través de Formspree, que actúa como encargado de
              tratamiento. Asimismo, el sitio carga fuentes tipográficas y mapas de terceros cuyas políticas se indican
              en la{" "}
              <a href="/cookies" className="text-gold hover:underline">Política de Cookies</a>.
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Derechos del usuario</p>
            <p className="text-cream-muted/60">
              El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento,
              portabilidad y oposición enviando un correo a{" "}
              <a href={`mailto:${contactInfo.email}`} className="text-gold hover:underline">{contactInfo.email}</a>.
              Si considera que no se han atendido sus derechos, puede presentar una reclamación ante la
              Agencia Española de Protección de Datos (AEPD).
            </p>
          </div>

          <div className="glass-card rounded-xl border-paprika/10 p-6">
            <p className="font-semibold text-cream mb-3">Menores</p>
            <p className="text-cream-muted/60">
              Este sitio web no está dirigido a menores de 14 años ni recaba deliberadamente datos personales de los
              mismos. Si se detectara su tratamiento, se procedería a su supresión de forma inmediata.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}