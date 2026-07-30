import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-green-dark flex items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-display text-gold mb-4">Algo salió mal</h1>
            <p className="text-white/60 font-body text-sm mb-6">
              Ha ocurrido un error inesperado. Por favor, recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gold text-green-brand font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-gold-dark transition-all"
            >
              Recargar página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
