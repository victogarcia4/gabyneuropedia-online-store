import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talleres Grupales',
  description: 'Sesiones educativas en grupo sobre condiciones neurológicas.',
}

export default function TalleresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
          Servicios
        </span>
        <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Talleres Grupales
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Sesiones educativas en grupo
        </p>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 mb-8">
          <p className="text-lg text-gray-600 mb-8">
            Esta página está en construcción. Para más información sobre talleres grupales,
            por favor contáctame directamente.
          </p>

          <Link
            href="/contacto"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-600 transition shadow-lg"
          >
            Contactar para Más Información
          </Link>
        </div>
      </div>
    </div>
  )
}
