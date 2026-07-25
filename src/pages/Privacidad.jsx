import { ArrowLeft } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-green-dark">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-gold hover:underline mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-display text-gold mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">Política de Privacidad</h1>
        <div className="space-y-6 text-white/80 text-sm leading-relaxed">
          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Responsable del tratamiento</p>
            <p>
              Express Kebab es el responsable del tratamiento de los datos personales facilitados a través de este 
              sitio web, de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 
              3/2018 de Protección de Datos Personales y Garantía de Derechos Digitales (LOPDGDD).
            </p>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Datos recogidos</p>
            <p>
              A través del formulario de contacto se recogen los siguientes datos: nombre, teléfono o email, 
              y mensaje. Estos datos se utilizan exclusivamente para responder a las consultas del usuario.
            </p>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Finalidad del tratamiento</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li>Responder a las consultas y solicitudes realizadas a través del formulario de contacto.</li>
              <li>Gestionar pedidos realizados a través de WhatsApp.</li>
              <li>No se realizan comunicaciones comerciales sin consentimiento expreso del usuario.</li>
            </ul>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Derechos del usuario</p>
            <p>
              El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad 
              y oposición enviando un correo a <span className="text-gold">{contactInfo.email}</span>.
            </p>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Conservación de datos</p>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender la consulta y, posteriormente, 
              durante el plazo legalmente establecido.
            </p>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Servicios de terceros</p>
            <p>
              Este sitio web utiliza Formspree para el envío de formularios. Los datos se transfieren a sus 
              servidores para su procesamiento. Puedes consultar su política de privacidad en 
              <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> formspree.io/legal/privacy-policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
