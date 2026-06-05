import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-40 pb-32 px-4 overflow-hidden">
        {/* Background decorative image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/22-02-01-15-59-49-938_deco.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-teal-300 mb-4 uppercase">
                Neuropediatría científica, profundamente humana
              </p>
              <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Dra. María Gabriela Jiménez Méndez
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
                Fundadora de{' '}
                <a
                  href="https://www.instagram.com/gabyneuropedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 transition"
                >
                  @gabyneuropedia
                </a>
                {' '}· Ciencia con Corazón
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Soy Neuróloga Pediátrica, investigadora clínica, escritora y Family Nurse Practitioner en Houston.
              Acompaño a familias que buscan respuestas claras en autismo, TDAH, epilepsia, migraña,
              trastornos del movimiento y enfermedades raras, con rigor científico y lenguaje humano.
            </p>

            <div className="pt-4">
              <a
                href="#la-experta"
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-bold hover:bg-white/30 transition text-lg border border-white/30"
              >
                Conocer mi historia
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a href="#la-experta" className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-white text-xs font-medium tracking-wider uppercase">Scroll</span>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* La Experta Section - Credentials */}
      <section id="la-experta" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
              Credenciales Profesionales
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              La experta detrás del método
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Una trayectoria construida entre Sudamérica, Europa y Norteamérica al servicio de las familias
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <span className="text-3xl group-hover:scale-110 transition-transform">🎓</span>
              </div>
              <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-3">
                Trayectoria Tricontinental
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Formación y práctica entre Venezuela, España y Estados Unidos, con mirada clínica cosmopolita
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <span className="text-3xl group-hover:scale-110 transition-transform">📚</span>
              </div>
              <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-3">
                Escritora y Conferencista
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Autora de "El Autismo Puertas Adentro" y del "Manual de Urgencias Pediátricas"
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <span className="text-3xl group-hover:scale-110 transition-transform">🔬</span>
              </div>
              <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-3">
                Divulgadora Científica
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                14K+ seguidores en{' '}
                <a
                  href="https://www.instagram.com/gabyneuropedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  @gabyneuropedia
                </a>
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-rose-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors">
                <span className="text-3xl group-hover:scale-110 transition-transform">❤️</span>
              </div>
              <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-3">
                Enfoque Humano Primero
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acompañamiento familiar real: no solo diagnóstico, también claridad, contexto y plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Método CLARO Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-orange-600 mb-3 block uppercase">
              Metodología Propuesta
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Método C.L.A.R.O. para familias
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              del diagnóstico que aterra al <strong className="text-slate-900">diagnóstico que ilumina</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* C - Comprender */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="font-cormorant text-4xl font-bold text-blue-900">C</span>
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-blue-900 mb-4 text-center">
                Comprender
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                La condición neurológica: qué es, qué no es y cómo impacta la vida diaria.
              </p>
            </div>

            {/* L - Localizar */}
            <div className="group bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="font-cormorant text-4xl font-bold text-purple-900">L</span>
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-purple-900 mb-4 text-center">
                Localizar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Identificar el impacto en casa, trabajo, escuela, emociones y relaciones familiares.
              </p>
            </div>

            {/* A - Analizar */}
            <div className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="font-cormorant text-4xl font-bold text-teal-900">A</span>
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-teal-900 mb-4 text-center">
                Analizar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Revisar factores médicos, emocionales, ambientales y otros elementos que influyen.
              </p>
            </div>

            {/* R - Reconocer */}
            <div className="group bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 border border-rose-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="font-cormorant text-4xl font-bold text-rose-900">R</span>
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-rose-900 mb-4 text-center">
                Reconocer
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Opciones terapéuticas disponibles y cuándo considerar cada tipo de intervención.
              </p>
            </div>

            {/* O - Organizar */}
            <div className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="font-cormorant text-4xl font-bold text-orange-900">O</span>
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-orange-900 mb-4 text-center">
                Organizar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Crear un plan familiar y escolar para llegar mejor preparados a consulta.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/metodo-claro"
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 transition text-lg shadow-xl"
            >
              Conocer más sobre el Método CLARO
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
              Servicios de Acompañamiento
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Consultoría y Acompañamiento<br className="hidden md:block" />en Salud Neurológica
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Apoyo para familias que transitan autismo, TDAH, epilepsia, migraña, trastornos del movimiento
              y enfermedades raras. Del diagnóstico a un plan a la medida, con ciencia y acompañamiento humano.
            </p>
            <blockquote className="mt-6 max-w-3xl mx-auto font-cormorant text-2xl md:text-3xl italic text-slate-800">
              "Del diagnóstico que aterra, al diagnóstico que ilumina."
              <cite className="block mt-3 font-sans text-sm not-italic font-bold tracking-[0.16em] uppercase text-teal-600">
                Dra. María Gabriela Jiménez Méndez
              </cite>
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:border-teal-300 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full border border-teal-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-transparent rounded-3xl -z-10"></div>
              <Image
                src="/images/hero-dra-gabriela.png"
                alt="Dra. Gaby - Retrato Profesional"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="font-cormorant text-4xl font-bold text-teal-600">10+</div>
                <div className="text-sm text-gray-600 font-bold">Años de práctica</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
                  Sobre Mí
                </span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  La doctora que escucha antes de orientar
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Soy la <strong className="text-slate-900">Dra. María Gabriela Jiménez Méndez</strong>,
                  Neuróloga Pediátrica venezolana y Family Nurse Practitioner en Houston, con formación y experiencia
                  en Sudamérica, Europa y Norteamérica. Investigadora clínica, escritora y conferencista comprometida
                  con familias que necesitan respuestas cuando el camino diagnóstico ha sido difícil.
                </p>
                <p>
                  Autora de <em>"El Autismo Puertas Adentro"</em> y <em>"Manual de Urgencias Pediátricas"</em>.
                  Divulgo neurología con ciencia, corazón y lenguaje accesible para familias, docentes y profesionales.
                </p>
                <p>
                  Mi enfoque combina rigurosidad científica, empatía clínica y defensa de los niños neurodivergentes,
                  con especial atención a neurodiversidad, TEA, TDAH, epilepsia, migraña y enfermedades raras.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <div className="font-cormorant text-3xl font-bold text-teal-600">14K+</div>
                  <div className="text-sm text-gray-600 font-semibold">Seguidores</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <div className="font-cormorant text-3xl font-bold text-teal-600">2</div>
                  <div className="text-sm text-gray-600 font-semibold">Libros publicados</div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/sobre-mi"
                  className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition text-lg"
                >
                  Conocer mi trayectoria completa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
              Testimonios
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              La voz de las familias<br className="hidden md:block" />que ya abrieron las puertas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-6">
            ¿Lista para iniciar tu proceso?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Agenda tu consultoría online desde cualquier lugar de LATAM, USA o España y demos forma a un plan claro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/servicios/asesorias"
              className="bg-teal-500 text-white px-10 py-5 rounded-lg font-bold hover:bg-teal-600 transition text-lg shadow-2xl"
            >
              Agendar Consultoría Ahora
            </a>
            <a
              href={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace('+', '')}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-5 rounded-lg font-bold hover:bg-green-600 transition text-lg shadow-2xl flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
            Comunidad & Contenido
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sígueme en Instagram
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contenido educativo sobre autismo, TDAH, neurodesarrollo, enfermedades raras y neurodiversidad con lenguaje claro
          </p>
          <a
            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-10 py-5 rounded-lg font-bold hover:opacity-90 transition text-lg shadow-xl"
          >
            <span className="text-2xl">📷</span>
            <span>@gabyneuropedia</span>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">14K+ seguidores</span>
          </a>
        </div>
      </section>
    </div>
  )
}
