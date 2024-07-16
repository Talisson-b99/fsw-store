'use server'

import Stripe from 'stripe'

import { CartProduct } from '@/app/providers/useCartStore'
import { computeProductTotalPrice } from '@/helps/products'

export const createCheckout = async (products: CartProduct[]) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
  })

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',

    line_items: products.map((product: CartProduct) => {
      return {
        price_data: {
          currency: 'brl',
          product_data: {
            name: product.name,
            images: product.imageUrls,
            description: product.description,
          },
          unit_amount: computeProductTotalPrice(product).totalPrice * 100,
        },
        quantity: product.quantity,
      }
    }),
  })

  return checkout
}
