import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Método CLARO - Acompañamiento Neurológico',
  description: 'Metodología integral para el diagnóstico y acompañamiento de condiciones neurológicas. Enfoque científico, humano y personalizado.',
}

export default function MetodoClaroPage() {
  const steps = [
    {
      letter: 'C',
      title: 'Comprender',
      description: 'Qué es TDAH, qué no es y por qué no se debe reducirse a simple inquietud.',
    },
    {
      letter: 'L',
      title: 'Localizar',
      description: 'Identificar el impacto funcional en casa, escuela, emociones, conducta y relaciones.',
    },
    {
      letter: 'A',
      title: 'Analizar',
      description: 'Revisar sueño, pantallas, ansiedad, trauma, duelo y otros factores confundidores.',
    },
    {
      letter: 'R',
      title: 'Reconocer',
      description: 'Diferenciar cuándo no medicas inicialmente y cuándo sí considerar tratamiento.',
    },
    {
      letter: 'O',
      title: 'Organizar',
      description: 'Crear un plan familiar y escolar para llegar mejor preparados a consulta.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/22-02-01-15-59-49-938_deco.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-[0.12em] text-teal-600 mb-3 block uppercase">
              Metodología
            </span>
            <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Método CLARO
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Una metodología integral para el acompañamiento de condiciones neurológicas,
              basada en <strong>ciencia, empatía y resultados medibles</strong>.
            </p>
          </div>

          {/* Image */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/metodo-claro.png"
                alt="Método CLARO - Metodología integral"
                width={1200}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Método CLARO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ¿Qué es el Método CLARO?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Es un enfoque estructurado en <strong>5 pilares fundamentales</strong> que guían el proceso de diagnóstico,
            tratamiento y acompañamiento de condiciones neurológicas en todas las edades.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            No es solo un protocolo médico: es un camino de transformación donde las familias pasan del miedo
            a la claridad, y de la incertidumbre al empoderamiento.
          </p>
        </div>
      </section>

      {/* eBook Image Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
            <Image
              src="/foto eBook tx tdah.png"
              alt="eBook Mitos y Realidades del Tratamiento de TDAH"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/servicios/infoproductos"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition shadow-lg hover:scale-105 duration-300"
            >
              Conoce más sobre el eBook
            </Link>
          </div>
        </div>
      </section>

      {/* 5 Steps - CLARO */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Los 5 Pilares del Método
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-l-8 border-teal-500 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Letter Circle */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-3xl font-bold">{step.letter}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-cormorant text-3xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className="hidden md:block flex-shrink-0 text-6xl font-bold text-gray-200">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            ¿Qué lograrás con el Método CLARO?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🧠',
                title: 'Claridad diagnóstica',
                description: 'Comprenderás el diagnóstico sin tecnicismos, con explicaciones científicas accesibles.',
              },
              {
                icon: '📊',
                title: 'Objetivos medibles',
                description: 'Estableceremos metas claras y trackearemos el progreso de forma objetiva.',
              },
              {
                icon: '💪',
                title: 'Empoderamiento familiar',
                description: 'Ganarás herramientas para tomar decisiones informadas sobre el tratamiento.',
              },
              {
                icon: '🤝',
                title: 'Acompañamiento continuo',
                description: 'No estarás sola/o. Seguimiento personalizado adaptado a tu ritmo.',
              },
              {
                icon: '🔬',
                title: 'Evidencia actualizada',
                description: 'Tratamientos basados en la ciencia más reciente, sin mitos ni modas.',
              },
              {
                icon: '🌟',
                title: 'Resultados sostenibles',
                description: 'Cambios reales y duraderos que mejoran la calidad de vida de toda la familia.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-cormorant text-2xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            ¿Para quién es el Método CLARO?
          </h2>
          <div className="space-y-6 text-left">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
              <p className="text-lg text-gray-700">
                ✓ Familias con diagnóstico reciente que buscan <strong>claridad y dirección</strong>
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
              <p className="text-lg text-gray-700">
                ✓ Padres que quieren <strong>participar activamente</strong> en el tratamiento de sus hijos
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
              <p className="text-lg text-gray-700">
                ✓ Adultos con condiciones neurológicas en busca de <strong>acompañamiento profesional</strong>
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
              <p className="text-lg text-gray-700">
                ✓ Familias en <strong>LATAM, USA y España</strong> que valoran la telemedicina de calidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-6">
            Comienza tu camino con el Método CLARO
          </h2>
          <p className="text-xl mb-8 text-teal-100 leading-relaxed">
            Agenda una primera consultoría y descubre cómo esta metodología puede transformar
            la experiencia de tu familia con las condiciones neurológicas.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-teal-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-2xl hover:scale-105 duration-300"
          >
            Agendar Consultoría
          </Link>
        </div>
      </section>
    </div>
  )
}
