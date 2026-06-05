import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Asesorías Personalizadas',
  description: 'Asesoría familiar personalizada para ordenar dudas, estudios y próximos pasos en autismo, TDAH, epilepsia, migraña y enfermedades raras.',
}

export default function AsesoriasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
          Servicios
        </span>
        <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Asesorías Personalizadas
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Del diagnóstico que aterra al diagnóstico que ilumina
        </p>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 mb-8">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Un espacio para familias que necesitan claridad frente a un diagnóstico, una sospecha clínica o un camino
            que se ha vuelto confuso. Revisamos historia, estudios, síntomas, prioridades y preguntas para organizar
            los siguientes pasos con rigor científico y lenguaje humano.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Especialmente útil en autismo, TDAH, epilepsia, migraña, trastornos del movimiento, aprendizaje y
            enfermedades raras o neurogenéticas. La meta no es solo nombrar una condición, sino construir un plan
            a la medida para tu familia.
          </p>

          <Link
            href="https://www.instagram.com/gabyneuropedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-600 transition shadow-lg"
          >
            Solicitar Información
          </Link>
        </div>
      </div>
    </div>
  )
}
