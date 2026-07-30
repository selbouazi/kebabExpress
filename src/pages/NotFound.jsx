import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-green-dark flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <h1 className="text-8xl font-display text-gold drop-shadow-[3px_3px_0_rgba(0,0,0,0.4)] mb-4">404</h1>
        <p className="text-white/60 font-body text-lg mb-8">Página no encontrada</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-green-brand font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-gold-dark transition-all"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
