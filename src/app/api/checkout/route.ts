import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24-preview' as any, // standard Next.js Stripe configuration
})

export async function POST(request: Request) {
  try {
    const { buyTarget, email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    let priceId = ''
    let mode: 'payment' | 'subscription' = 'payment'

    // Determine the product, price, and mode
    if (buyTarget === 'ebook') {
      priceId = process.env.STRIPE_PRICE_EBOOK || 'price_1Qx_ebook_placeholder'
      mode = 'payment'
    } else if (buyTarget === 'app_monthly') {
      priceId = process.env.STRIPE_PRICE_APP_MONTHLY || 'price_1Qx_monthly_placeholder'
      mode = 'subscription'
    } else if (buyTarget === 'app_yearly') {
      priceId = process.env.STRIPE_PRICE_APP_YEARLY || 'price_1Qx_yearly_placeholder'
      mode = 'subscription'
    } else {
      return NextResponse.json({ error: 'Invalid buy target' }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: mode,
      success_url: `${siteUrl}/servicios/infoproductos?session_id={CHECKOUT_SESSION_ID}&success=true&target=${buyTarget}`,
      cancel_url: `${siteUrl}/servicios/infoproductos?cancel=true`,
      metadata: {
        buyTarget: buyTarget,
        email: email,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('Error creating checkout session:', err)
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 })
  }
}

// Add GET support to handle auth callback redirects smoothly
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const buyTarget = searchParams.get('buy')
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  // Direct GET request will just redirect to infoproducts page to handle payment trigger
  return NextResponse.redirect(`${siteUrl}/servicios/infoproductos?trigger_checkout=${buyTarget}`)
}
