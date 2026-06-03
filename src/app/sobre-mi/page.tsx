import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Mí - Dra. María Gabriela Jiménez',
  description: 'Médica Neurointensivista Venezolana y MSN Family Nurse Practitioner con formación internacional en USA y España. Especialista en condiciones neurológicas.',
}

export default function SobreMiPage() {
  const credentials = [
    "Médico Cirujano · LUZ, Venezuela",
    "Pediatría · ULA, Mérida",
    "Neurología Pediátrica · LUZ",
    "MSN Family Nurse Practitioner",
    "Estancia · Sant Joan de Déu, Barcelona",
    "Dipl. Pediatría Tropical · Carlos III, Madrid",
    "Locutora Certificada · LUZ",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-dra-gabriela.png"
                  alt="Dra. María Gabriela Jiménez - Neuróloga Pediátrica"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full -z-10 blur-2xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full -z-10 blur-2xl opacity-50"></div>
            </div>

            {/* Right: Content */}
            <div>
              <span className="text-sm font-bold tracking-[0.12em] text-teal-600 mb-3 block uppercase">
                Sobre Mí
              </span>
              <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                La doctora que<br />escucha antes de recetar.
              </h1>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Soy la <strong>Dra. María Gabriela Jiménez Méndez</strong>, Médica Neurointensivista Venezolana y <strong>MSN Family Nurse Practitioner</strong> con formación internacional en USA, y España. Investigadora clínica, escritora y conferencista comprometida con el bienestar neurológico infantil y familiar.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                Autora de <em>"El Autismo Puertas Adentro"</em> y <em>"Manual de Urgencias Pediátricas"</em>. Con más de 14K seguidores en Instagram como{' '}
                <Link
                  href="https://www.instagram.com/gabyneuropedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-bold hover:text-teal-700 transition"
                >
                  @gabyneuropedia
                </Link>
                , divulgo neurología con ciencia, corazón y lenguaje accesible para todas las familias.
              </p>

              {/* CTA */}
              <Link
                href="/servicios/asesorias"
                className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-600 transition shadow-lg"
              >
                Agendar Consultoría
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Formación y Credenciales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-4 text-sm text-slate-900 font-medium border-l-4 border-l-orange-400 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image: Experta Método */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/experta-metodo.png"
              alt="Experta detrás del Método CLARO"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Mi Misión
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Acompañar a las familias en el proceso de comprensión, diagnóstico y manejo de condiciones neurológicas,
            brindando herramientas científicas y emocionales para transformar el miedo en empoderamiento.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Creo en la medicina humanizada, en la escucha activa, y en que cada familia merece información clara,
            evidencia científica actualizada y un espacio seguro para crecer.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Publicaciones
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/servicios/infoproductos#libro-autismo"
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-6xl mb-6 text-center">📚</div>
              <h3 className="font-cormorant text-2xl font-bold text-slate-900 mb-3 text-center">
                El Autismo Puertas Adentro
              </h3>
              <p className="text-gray-600 text-center">
                Una guía honesta y científica para familias que navegan el espectro autista.
              </p>
              <p className="text-teal-600 text-center mt-4 font-semibold">
                Ver libro →
              </p>
            </Link>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🏥</div>
              <h3 className="font-cormorant text-2xl font-bold text-slate-900 mb-3 text-center">
                Manual de Urgencias Pediátricas
              </h3>
              <p className="text-gray-600 text-center">
                Herramienta práctica para profesionales de la salud en atención pediátrica de emergencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl font-bold mb-4">
            ¿Lista/o para comenzar?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Agenda tu primera consultoría y descubre cómo puedo acompañarte
          </p>
          <Link
            href="/servicios/asesorias"
            className="inline-block bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Agendar Consultoría
          </Link>
        </div>
      </section>
    </div>
  )
}
