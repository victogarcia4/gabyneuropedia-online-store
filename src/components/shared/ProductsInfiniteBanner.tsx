'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    name: 'El Autismo Puertas Adentro',
    image: '/El autismo puertas adentro.png',
    link: '/servicios/infoproductos#libro-autismo',
  },
  {
    name: 'Mitos y Realidades del Tratamiento de TDAH',
    image: '/Portada ebook.jpeg',
    link: '/servicios/infoproductos',
  },
  {
    name: "Tu rastreador TDAH, es tu 'TRAJE A LA MEDIDA'",
    image: '/traje a la medida tx tdah app.png',
    link: '/servicios/infoproductos',
  },
]

export default function ProductsInfiniteBanner() {
  // Duplicamos el array para crear el efecto de loop infinito
  const duplicatedProducts = [...products, ...products, ...products]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-slate-100 via-white to-slate-100 py-12 border-y border-gray-200">
      <div className="relative flex">
        {/* Primera animación */}
        <div className="flex animate-infinite-scroll gap-8 pr-8">
          {duplicatedProducts.map((product, index) => (
            <Link
              key={`first-${index}`}
              href={product.link}
              className="flex-shrink-0 group"
            >
              <div className="relative w-48 h-64 bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 group-hover:border-teal-500 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Segunda animación (duplicada para loop continuo) */}
        <div className="flex animate-infinite-scroll gap-8 pr-8" aria-hidden="true">
          {duplicatedProducts.map((product, index) => (
            <Link
              key={`second-${index}`}
              href={product.link}
              className="flex-shrink-0 group"
            >
              <div className="relative w-48 h-64 bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 group-hover:border-teal-500 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
