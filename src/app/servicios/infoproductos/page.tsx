import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import PricingSelector from '@/components/infoproductos/PricingSelector'
import CheckoutButton from '@/components/infoproductos/CheckoutButton'
import ProductsInfiniteBanner from '@/components/shared/ProductsInfiniteBanner'

export const metadata: Metadata = {
  title: 'Infoproductos - eBooks y Aplicaciones',
  description: 'Herramientas digitales para familias: El Autismo Puertas Adentro, recursos de TDAH y aplicaciones de seguimiento para compartir con el equipo clínico.',
}

export default function InfoproductosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-3 block uppercase">
            Infoproductos
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            eBooks y Aplicaciones
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas digitales para transformar dudas en claridad: autismo puertas adentro, TDAH sin filtros y seguimiento a la medida
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Book Product - El Autismo Puertas Adentro */}
            <div id="libro-autismo" className="scroll-mt-24 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-teal-500 hover:shadow-3xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative w-full h-64 lg:h-80 bg-gradient-to-br from-teal-50 to-white flex items-center justify-center p-6">
                <Image
                  src="/El autismo puertas adentro.png"
                  alt="El Autismo Puertas Adentro - Libro"
                  width={300}
                  height={400}
                  className="w-auto h-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 lg:p-8">
                {/* Icon */}
                <div className="text-4xl mb-3">📚</div>

                {/* Title */}
                <h2 className="font-cormorant text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  El Autismo Puertas Adentro
                </h2>

                {/* Description */}
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Una invitación a abrir las puertas del TEA con ciencia, historias reales y mirada profundamente humana.
                </p>

                {/* Extended description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Publicado por Universo de Letras. Reúne familia, escuela, terapeutas y mirada médica para acompañar el tránsito por este camino.
                </p>

                {/* CTA Button */}
                <Link
                  href="https://a.co/d/0fAb2lrD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center px-6 py-4 rounded-xl font-bold text-base hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  📖 Quiero el Libro
                </Link>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  Disponible en Amazon
                </p>
              </div>
            </div>

            {/* eBook Product */}
            <div id="ebook" className="scroll-mt-24 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-200 hover:shadow-3xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative w-full">
                <Image
                  src="/foto eBook tx tdah.png"
                  alt="eBook Mitos y Realidades del Tratamiento de TDAH"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 lg:p-8">
                {/* Pricing */}
                <div className="mb-6 text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-3xl lg:text-4xl font-bold text-slate-900">$27</span>
                    <span className="text-lg lg:text-xl text-gray-400 line-through">$47</span>
                  </div>
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                    Ahorra 43% - ¡Oferta limitada!
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-4 text-center">
                    Lo que incluye:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>eBook completo</strong> - TDAH sin filtros: mitos, realidades e impacto funcional
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Evidencia científica actualizada</strong> sobre tratamientos efectivos
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Guía práctica</strong> para que padres y familias participen como aliados activos del tratamiento
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>BONUS: Pomodoro Timer interactivo</strong> - Herramienta de productividad activable
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Formato dinámico HTML</strong> - No un PDF estático, contenido interactivo
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <CheckoutButton
                  buyTarget="ebook"
                  className="block w-full bg-purple-600 text-white text-center px-6 py-4 rounded-xl font-bold text-base hover:bg-purple-700 transition shadow-lg hover:shadow-purple-500/20"
                >
                  Comprar Ahora
                </CheckoutButton>
              </div>
            </div>

            {/* App Product */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500 hover:shadow-3xl transition-all duration-300 relative">
              {/* Popular Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  MÁS POPULAR
                </div>
              </div>

              {/* Product Image/Header */}
              <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 lg:p-10 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/images/22-02-01-15-59-49-938_deco.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl lg:text-5xl mb-4">📱</div>
                  <h2 className="font-cormorant text-2xl lg:text-3xl font-bold mb-3">
                    Tu Rastreador TDAH a la Medida
                  </h2>
                  <p className="text-base lg:text-lg text-gray-300">
                    Bitácora para compartir observaciones con tu equipo clínico
                  </p>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 lg:p-8">
                {/* Pricing Options */}
                <PricingSelector />

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-cormorant text-xl font-bold text-slate-900 mb-4 text-center">
                    Características:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">📝 Registro diario</p>
                        <p className="text-sm text-gray-600">
                          Tratamiento, dosis, hora, síntomas, apetito, sueño, ánimo y notas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">📊 Historial y tendencias</p>
                        <p className="text-sm text-gray-600">
                          Visualiza progreso y cambios para conversar con tu especialista
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">🧠 Análisis inteligente</p>
                        <p className="text-sm text-gray-600">
                          Resumen clínico y señales de atención para orientar seguimiento
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">📤 Exporta datos</p>
                        <p className="text-sm text-gray-600">
                          Comparte PDF, CSV o respaldo JSON con tu equipo clínico
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">🔒 Privacidad garantizada</p>
                        <p className="text-sm text-gray-600">
                          Espacio privado, local-first y listo para compartir con tu equipo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-900">
                  <p className="font-semibold mb-1">💡 Nota importante:</p>
                  <p>
                    Esta app no sustituye consulta médica. Es un bitácora para facilitar el intercambio
                    de observaciones con tu equipo clínico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Infinite Banner */}
      <ProductsInfiniteBanner />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-bold text-slate-900 mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                ¿Cómo accedo a los productos después de comprar?
              </h3>
              <p className="text-gray-600">
                Recibirás un email inmediatamente con el enlace al eBook interactivo (formato HTML dinámico con Pomodoro Timer activable) y las instrucciones de acceso a la aplicación.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                ¿La aplicación funciona en iOS y Android?
              </h3>
              <p className="text-gray-600">
                Sí, la aplicación es una Progressive Web App (PWA) que funciona en cualquier dispositivo
                con navegador web moderno.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                ¿Hay garantía de reembolso?
              </h3>
              <p className="text-gray-600">
                Sí, ofrecemos garantía de satisfacción de 7 días. Si no estás satisfecho, te devolvemos
                tu dinero sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl font-bold mb-4">
            ¿Tienes dudas sobre qué producto es mejor para ti?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Agenda una consulta gratuita de 15 minutos y te orientaré
          </p>
          <Link
            href="https://www.instagram.com/gabyneuropedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Agendar Consulta Gratuita
          </Link>
        </div>
      </section>
    </div>
  )
}
