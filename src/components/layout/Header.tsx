'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="https://www.instagram.com/gabyneuropedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition"
          >
            <div className="font-cormorant text-2xl font-bold text-slate-900">
              @gabyneuropedia
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-600 font-semibold transition"
            >
              Inicio
            </Link>

            <Link
              href="/sobre-mi"
              className="text-gray-700 hover:text-teal-600 font-semibold transition"
            >
              Sobre mí
            </Link>

            {/* Servicios Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-teal-600 font-semibold transition flex items-center gap-1">
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-3">
                  <Link
                    href="/servicios/asesorias"
                    className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                  >
                    <div className="font-semibold">Asesorías Personalizadas</div>
                    <div className="text-sm text-gray-500">Claridad diagnóstica y plan</div>
                  </Link>

                  <Link
                    href="/servicios/talleres"
                    className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                  >
                    <div className="font-semibold">Talleres Grupales</div>
                    <div className="text-sm text-gray-500">Familias, escuelas y equipos</div>
                  </Link>

                  <Link
                    href="/servicios/conferencias"
                    className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                  >
                    <div className="font-semibold">Conferencias</div>
                    <div className="text-sm text-gray-500">Enfermedades neurológicas y neurodiversidad</div>
                  </Link>

                  <Link
                    href="/servicios/cursos"
                    className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                  >
                    <div className="font-semibold">Cursos</div>
                    <div className="text-sm text-gray-500">Formación con lenguaje claro</div>
                  </Link>

                  <div className="border-t border-gray-100 my-2"></div>

                  <Link
                    href="/servicios/infoproductos"
                    className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                  >
                    <div className="font-semibold">Infoproductos</div>
                    <div className="text-sm text-gray-500">eBooks y Aplicaciones</div>
                  </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/metodo-claro"
              className="text-gray-700 hover:text-teal-600 font-semibold transition"
            >
              Método CLARO
            </Link>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-teal-600 font-semibold transition"
            >
              Blog
            </Link>

            <Link
              href="/servicios/asesorias"
              className="text-gray-700 hover:text-teal-600 font-semibold transition"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/servicios/asesorias"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-600 transition shadow-lg"
            >
              Agendar Consultoría
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 font-semibold py-2 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>

              <Link
                href="/sobre-mi"
                className="text-gray-700 hover:text-teal-600 font-semibold py-2 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre mí
              </Link>

              <div className="py-2">
                <div className="font-semibold text-gray-900 mb-2">Servicios</div>
                <div className="pl-4 space-y-2 text-sm">
                  <Link
                    href="/servicios/asesorias"
                    className="block text-gray-600 hover:text-teal-600 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Asesorías Personalizadas
                  </Link>
                  <Link
                    href="/servicios/talleres"
                    className="block text-gray-600 hover:text-teal-600 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talleres Grupales
                  </Link>
                  <Link
                    href="/servicios/conferencias"
                    className="block text-gray-600 hover:text-teal-600 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Conferencias
                  </Link>
                  <Link
                    href="/servicios/cursos"
                    className="block text-gray-600 hover:text-teal-600 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cursos
                  </Link>
                  <Link
                    href="/servicios/infoproductos"
                    className="block text-gray-600 hover:text-teal-600 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Infoproductos (eBooks, Apps)
                  </Link>
                </div>
              </div>

              <Link
                href="/metodo-claro"
                className="text-gray-700 hover:text-teal-600 font-semibold py-2 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Método CLARO
              </Link>

              <Link
                href="/blog"
                className="text-gray-700 hover:text-teal-600 font-semibold py-2 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/servicios/asesorias"
                className="text-gray-700 hover:text-teal-600 font-semibold py-2 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>

              <Link
                href="/servicios/asesorias"
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-600 transition text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Consultoría
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
