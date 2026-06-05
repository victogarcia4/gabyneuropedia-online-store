import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Artículos sobre Neurología',
  description: 'Artículos, guías y recursos sobre autismo, TDAH, neurodesarrollo, enfermedades raras y acompañamiento familiar.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
          Blog
        </span>
        <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Artículos y Recursos
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Neurología con rigor científico, lenguaje claro y mirada familiar
        </p>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 mb-8">
          <div className="text-6xl mb-6">📝</div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Este espacio reunirá artículos y guías para familias, docentes y profesionales que buscan comprender mejor
            el autismo, el TDAH, la epilepsia, la migraña, los trastornos del aprendizaje y las enfermedades raras.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Mientras se publica la biblioteca completa, puedes seguir el contenido educativo de GabyNeuroPedia en Instagram:
            ciencia, corazón y respuestas claras para acompañar mejor.
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-sm text-gray-500 italic">
              Mientras tanto, sígueme en Instagram para contenido diario:
            </p>
            <Link
              href="https://www.instagram.com/gabyneuropedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @gabyneuropedia
            </Link>
          </div>

          <Link
            href="/servicios/asesorias"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-600 transition shadow-lg"
          >
            Solicitar Asesoría
          </Link>
        </div>

        {/* Coming Soon Topics */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border border-teal-100">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-2">
              Neurología
            </h3>
            <p className="text-sm text-gray-600">
              Artículos sobre autismo, TDAH, epilepsia, migraña y enfermedades raras
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100">
            <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
            <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-2">
              Familia
            </h3>
            <p className="text-sm text-gray-600">
              Guías para el acompañamiento familiar
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-100">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-2">
              Recursos
            </h3>
            <p className="text-sm text-gray-600">
              Herramientas y materiales descargables
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
