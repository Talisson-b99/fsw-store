'use server'

import { CartProduct } from '@/app/providers/useCartStore'
import prisma from '@/lib/prisma'

export const createOrder = async (
  cartProducts: CartProduct[],
  userId: string,
) => {
  const order = await prisma.order.create({
    data: {
      userId,
      status: 'WAITING_FOR_PAYMENT',
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  })

  return order
}
