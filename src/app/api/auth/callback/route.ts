import { NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const buyTarget = searchParams.get('buy')

  if (code) {
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // If there's a purchase target, redirect to Stripe checkout session API route
      if (buyTarget) {
        return NextResponse.redirect(`${origin}/api/checkout?buy=${buyTarget}`)
      }
      return NextResponse.redirect(`${origin}/`)
    }
  }

  // Return the user to an error page or home page if something goes wrong
  return NextResponse.redirect(`${origin}/login?error=auth-callback-failed`)
}
