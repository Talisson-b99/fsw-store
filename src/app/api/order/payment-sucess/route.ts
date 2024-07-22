import { NextResponse } from 'next/server'
import Stripe from 'stripe'

import prisma from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
})

export const POST = async (req: Request) => {
  const signature = req.headers.get('stripe-signature')!

  const text = await req.text()

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY,
  )

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ['line_items'],
      },
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const lineItems = sessionWithLineItems.line_items

    await prisma.order.update({
      where: {
        id: session.metadata.orderId,
      },
      data: {
        status: 'PAYMENT_CONFIRMED',
      },
    })
  }

  return NextResponse.json({ received: true })
}
