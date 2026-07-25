import { ArrowLeft } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-green-dark">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-gold hover:underline mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </a>
        <h1 className="text-4xl font-display text-gold mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">Aviso Legal</h1>
        <div className="space-y-6 text-white/80 text-sm leading-relaxed">
          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Titular del sitio web</p>
            <p>
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, 
              de Servicios de la Sociedad de la Información y de Comercio Electrónico, a continuación se exponen los 
              datos identificativos del titular del sitio web.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3 text-white/70">
              <li><strong className="text-white">Nombre del negocio:</strong> Express Kebab</li>
              <li><strong className="text-white">Dirección:</strong> {contactInfo.address.full}</li>
              <li><strong className="text-white">Teléfono:</strong> {contactInfo.phone}</li>
              <li><strong className="text-white">Email:</strong> {contactInfo.email}</li>
            </ul>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Propiedad intelectual</p>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño) son propiedad de Express Kebab 
              o se dispone de los derechos necesarios para su uso. Queda prohibida la reproducción total o parcial 
              sin autorización expresa.
            </p>
          </div>

          <div className="bg-green-card/50 border border-gold/20 rounded p-6">
            <p className="font-semibold text-white mb-3">Exención de responsabilidad</p>
            <p>
              Express Kebab no se responsabiliza de los posibles errores u omisiones en los contenidos del sitio web, 
              ni de los daños derivados de su uso o de la contratación de servicios a través del mismo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
