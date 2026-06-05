import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSupabaseServerClient } from '@/lib/supabase'
import { sendPurchaseConfirmationEmail } from '@/lib/mail'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24-preview' as any,
})

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature') || ''
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

  let event: Stripe.Event

  try {
    if (!sig || !webhookSecret) {
      throw new Error('Missing stripe-signature or STRIPE_WEBHOOK_SECRET')
    }
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const metadata = session.metadata || {}
    const buyTarget = metadata.buyTarget as 'ebook' | 'app_monthly' | 'app_yearly'
    const email = metadata.email

    if (email && buyTarget) {
      console.log(`Processing purchase of ${buyTarget} for user: ${email}`)

      // 1. Record purchase in Supabase (optional, bypasses RLS using service role key)
      try {
        const supabase = getSupabaseServerClient(true)
        const { error } = await supabase.from('purchases').insert([
          {
            email: email,
            product_id: buyTarget,
            stripe_session_id: session.id,
            status: 'completed',
            price_paid: session.amount_total ? session.amount_total / 100 : 0,
          },
        ])

        if (error) {
          console.error('Error saving purchase to Supabase:', error.message)
          // We don't throw error here so the email still gets sent even if DB insert fails
        } else {
          console.log('Purchase saved successfully to database')
        }
      } catch (dbError) {
        console.error('Database connection error:', dbError)
      }

      // 2. Send email with access links using Resend
      const emailResult = await sendPurchaseConfirmationEmail(email, buyTarget)
      if (emailResult.success) {
        console.log(`Purchase email sent successfully to: ${email}`)
      } else {
        console.error(`Failed to send email to ${email}:`, emailResult.error)
      }
    }
  }

  return NextResponse.json({ received: true })
}
