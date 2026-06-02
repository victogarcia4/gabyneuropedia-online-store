'use client'

import { useState } from 'react'

type PlanType = 'monthly' | 'yearly' | null

export default function PricingSelector() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('yearly') // Default to yearly (recommended)

  return (
    <div className="grid sm:grid-cols-2 gap-6 mb-8">
      {/* Monthly Plan */}
      <div
        onClick={() => setSelectedPlan('monthly')}
        className={`border-2 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer relative ${
          selectedPlan === 'monthly'
            ? 'border-teal-500 shadow-[0_0_25px_rgba(20,184,166,0.5)] scale-105'
            : 'border-gray-300 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:scale-102'
        }`}
      >
        {selectedPlan === 'monthly' && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              SELECCIONADO
            </span>
          </div>
        )}
        <div className="text-sm font-bold text-gray-500 mb-2 uppercase">Mensual</div>
        <div className="text-4xl font-bold text-slate-900 mb-2">$11.99</div>
        <div className="text-sm text-gray-600">/monthly</div>
        <div className="text-xs text-gray-500 mt-3">
          $143.88 si pagas mes a mes por 12 meses
        </div>
      </div>

      {/* Annual Plan - Recommended */}
      <div
        onClick={() => setSelectedPlan('yearly')}
        className={`border-4 rounded-2xl p-6 text-center bg-orange-50 relative transition-all duration-300 cursor-pointer ${
          selectedPlan === 'yearly'
            ? 'border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)] scale-105'
            : 'border-orange-400 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-102'
        }`}
      >
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {selectedPlan === 'yearly' ? 'SELECCIONADO' : 'AHORRA 47%'}
          </span>
        </div>
        <div className="text-sm font-bold text-orange-600 mb-2 uppercase">Anual</div>
        <div className="text-4xl font-bold text-slate-900 mb-2">$97</div>
        <div className="text-sm text-gray-600">/yearly</div>
        <div className="text-xs text-green-600 font-bold mt-3">
          Ahorra $46.88 frente al pago mensual anualizado
        </div>
      </div>
    </div>
  )
}
