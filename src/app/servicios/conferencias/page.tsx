import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conferencias',
  description: 'Charlas presenciales y online sobre autismo, TDAH, neurodesarrollo, enfermedades raras, epilepsia, migraña y trastornos del movimiento.',
}

export default function ConferenciasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
          Servicios
        </span>
        <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Conferencias
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Charlas con ciencia, lenguaje claro y sensibilidad familiar
        </p>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 mb-8">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Conferencias para familias, colegios, equipos de salud y comunidades que necesitan comprender mejor
            el neurodesarrollo. La Dra. Gabriela aborda autismo, TDAH, epilepsia infantil, migraña, trastornos del
            movimiento, corea y enfermedades raras desde una mirada clínica y profundamente humana.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Temas sugeridos: <strong>Autismo puertas adentro</strong>, <strong>TDAH sin filtros</strong>,
            <strong> enfermedades raras y neurogenéticas</strong>, <strong>neurodiversidad y aprendizaje</strong>,
            y <strong>migraña de la clínica a la vivencia</strong>.
          </p>

          <Link
            href="https://www.instagram.com/gabyneuropedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-600 transition shadow-lg"
          >
            Solicitar una Conferencia
          </Link>
        </div>
      </div>
    </div>
  )
}
