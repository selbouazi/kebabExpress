import { ArrowLeft } from 'lucide-react'

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-[#FFF7EF]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-[#D94A2B] hover:underline mb-8">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-bold text-[#1C0F0A] font-heading mb-8">Aviso Legal</h1>
        <div className="prose prose-stone max-w-none text-[#2D2017]/80 space-y-4">
          <p><strong>Titular del sitio web</strong></p>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, 
            de Servicios de la Sociedad de la Información y de Comercio Electrónico, a continuación se exponen los 
            datos identificativos del titular del sitio web.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Nombre del negocio:</strong> Kebab Express</li>
            <li><strong>Dirección:</strong> [Dirección del restaurante]</li>
            <li><strong>Teléfono:</strong> [Teléfono]</li>
            <li><strong>Email:</strong> [Email de contacto]</li>
          </ul>

          <p className="mt-6"><strong>Propiedad intelectual</strong></p>
          <p>
            Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño) son propiedad de Kebab Express 
            o se dispone de los derechos necesarios para su uso. Queda prohibida la reproducción total o parcial 
            sin autorización expresa.
          </p>

          <p className="mt-6"><strong>Exención de responsabilidad</strong></p>
          <p>
            Kebab Express no se responsabiliza de los posibles errores u omisiones en los contenidos del sitio web, 
            ni de los daños derivados de su uso o de la contratación de servicios a través del mismo.
          </p>
        </div>
      </div>
    </div>
  )
}
