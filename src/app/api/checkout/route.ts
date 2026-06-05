import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const buyTarget = searchParams.get('buy')

    if (!buyTarget) {
      return NextResponse.json({ error: 'Missing buy parameter' }, { status: 400 })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_dummy_key_for_build', {
      apiVersion: '2025-02-24-preview' as any,
    })

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
      priceId = process.env.STRIPE_PRICE_APP_YEARLY || process.env.STRIPE_PRICE_App_YEARLY || 'price_1Qx_yearly_placeholder'
      mode = 'subscription'
    } else {
      return NextResponse.json({ error: 'Invalid buy target' }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Create Stripe Checkout Session (Guest checkout - collects email automatically)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
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
      },
    })

    if (session.url) {
      return NextResponse.redirect(session.url)
    } else {
      return NextResponse.redirect(`${siteUrl}/servicios/infoproductos?error=checkout-init-failed`)
    }
  } catch (err: any) {
    console.error('Error creating checkout session via GET:', err)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    return NextResponse.redirect(`${siteUrl}/servicios/infoproductos?error=internal-server-error`)
  }
}

// Keep POST support just in case, but route all to Stripe directly
export async function POST(request: Request) {
  try {
    const { buyTarget } = await request.json()
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_dummy_key_for_build', {
      apiVersion: '2025-02-24-preview' as any,
    })

    let priceId = ''
    let mode: 'payment' | 'subscription' = 'payment'

    if (buyTarget === 'ebook') {
      priceId = process.env.STRIPE_PRICE_EBOOK || 'price_1Qx_ebook_placeholder'
      mode = 'payment'
    } else if (buyTarget === 'app_monthly') {
      priceId = process.env.STRIPE_PRICE_APP_MONTHLY || 'price_1Qx_monthly_placeholder'
      mode = 'subscription'
    } else if (buyTarget === 'app_yearly') {
      priceId = process.env.STRIPE_PRICE_APP_YEARLY || process.env.STRIPE_PRICE_App_YEARLY || 'price_1Qx_yearly_placeholder'
      mode = 'subscription'
    } else {
      return NextResponse.json({ error: 'Invalid buy target' }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
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
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 })
  }
}
