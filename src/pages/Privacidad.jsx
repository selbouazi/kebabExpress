import { ArrowLeft } from 'lucide-react'

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[#FFF7EF]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-[#D94A2B] hover:underline mb-8">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-bold text-[#1C0F0A] font-heading mb-8">Política de Privacidad</h1>
        <div className="prose prose-stone max-w-none text-[#2D2017]/80 space-y-4">
          <p><strong>Responsable del tratamiento</strong></p>
          <p>
            Kebab Express es el responsable del tratamiento de los datos personales facilitados a través de este 
            sitio web, de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 
            3/2018 de Protección de Datos Personales y Garantía de Derechos Digitales (LOPDGDD).
          </p>

          <p className="mt-6"><strong>Datos recogidos</strong></p>
          <p>
            A través del formulario de contacto se recogen los siguientes datos: nombre, teléfono o email, 
            y mensaje. Estos datos se utilizan exclusivamente para responder a las consultas del usuario.
          </p>

          <p className="mt-6"><strong>Finalidad del tratamiento</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responder a las consultas y solicitudes realizadas a través del formulario de contacto.</li>
            <li>Gestionar pedidos realizados a través de WhatsApp.</li>
            <li>No se realizan comunicaciones comerciales sin consentimiento expreso del usuario.</li>
          </ul>

          <p className="mt-6"><strong>Derechos del usuario</strong></p>
          <p>
            El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad 
            y oposición enviando un correo a [email de contacto].
          </p>

          <p className="mt-6"><strong>Conservación de datos</strong></p>
          <p>
            Los datos se conservarán durante el tiempo necesario para atender la consulta y, posteriormente, 
            durante el plazo legalmente establecido.
          </p>

          <p className="mt-6"><strong>Servicios de terceros</strong></p>
          <p>
            Este sitio web utiliza Formspree para el envío de formularios. Los datos se transfieren a sus 
            servidores para su procesamiento. Puedes consultar su política de privacidad en 
            <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#D94A2B] hover:underline"> formspree.io/legal/privacy-policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
