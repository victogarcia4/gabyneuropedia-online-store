'use client'

import { useState } from 'react'
import { supabaseBrowser } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface CheckoutButtonProps {
  buyTarget: 'ebook' | 'app_monthly' | 'app_yearly'
  className?: string
  children: React.ReactNode
}

export default function CheckoutButton({ buyTarget, className, children }: CheckoutButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      // 1. Check if user is logged in
      const { data: { user } } = await supabaseBrowser.auth.getUser()

      if (!user) {
        // If not logged in, redirect to register page with purchase intention
        router.push(`/registro?buy=${buyTarget}`)
        return
      }

      // 2. If logged in, call checkout API to get Stripe Session URL
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyTarget,
          email: user.email,
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url
      } else {
        alert('Error al inicializar el pago: ' + (data.error || 'Intente nuevamente.'))
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Hubo un error al procesar la solicitud.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed transition duration-300`}
    >
      {loading ? 'Procesando...' : children}
    </button>
  )
}
