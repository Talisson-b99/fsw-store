import { Product } from '@prisma/client'

interface ProductWithTotalPrice extends Product {
  totalPrice: number
}

export function computeProductTotalPrice(
  product: Product,
): ProductWithTotalPrice {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    }
  }

  return {
    ...product,
    totalPrice:
      Number(product.basePrice) -
      (Number(product.discountPercentage) / 100) * Number(product.basePrice),
  }
}
