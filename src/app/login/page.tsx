'use client'

import { useState } from 'react'
import { supabaseBrowser } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const buyTarget = searchParams.get('buy') // 'ebook', 'app_monthly', 'app_yearly'
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const { data, error } = await supabaseBrowser.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        throw error
      }

      // If logged in successfully, proceed to checkout if a target is set, otherwise home
      if (buyTarget) {
        router.push(`/api/checkout?buy=${buyTarget}`)
      } else {
        router.push('/')
      }
    } catch (err: any) {
      setMessage({
        type: 'error',
        text: err.message || 'Error al iniciar sesión. Verifica tus credenciales.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl text-white">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-cormorant font-bold text-teal-300 mb-2">
            GabyNeuroPedia
          </Link>
          <h1 className="font-cormorant text-3xl font-bold">Iniciar Sesión</h1>
          <p className="text-sm text-gray-300 mt-2">
            Accede a tu cuenta para continuar con la compra o ver tus accesos
          </p>
        </div>

        {buyTarget && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-center">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-300 block mb-1">
              Completarás la compra de
            </span>
            <span className="text-sm font-semibold">
              {buyTarget === 'ebook' && 'eBook: Mitos y Realidades del Tratamiento de TDAH ($27)'}
              {buyTarget === 'app_monthly' && 'App Bitácora TDAH - Suscripción Mensual ($11.99)'}
              {buyTarget === 'app_yearly' && 'App Bitácora TDAH - Suscripción Anual ($97)'}
            </span>
          </div>
        )}

        {message && (
          <div
            className={`p-4 rounded-xl mb-6 text-sm font-medium ${
              message.type === 'success'
                ? 'bg-teal-500/20 border border-teal-500/30 text-teal-200'
                : 'bg-rose-500/20 border border-rose-500/30 text-rose-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Iniciando sesión...' : 'Entrar y Continuar'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-300 border-t border-white/10 pt-6">
          ¿No tienes cuenta?{' '}
          <Link
            href={`/registro${buyTarget ? `?buy=${buyTarget}` : ''}`}
            className="text-teal-400 font-bold hover:underline"
          >
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  )
}
