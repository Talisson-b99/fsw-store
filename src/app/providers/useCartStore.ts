import { Product } from '@prisma/client'
import { create } from 'zustand'

interface CartProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductCart: (product: CartProduct) => void
}

export const useCartStore = create<ICartContext>()((set) => ({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,

  addProductCart: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}))
