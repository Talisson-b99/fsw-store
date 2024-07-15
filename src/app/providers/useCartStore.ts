import { Product } from '@prisma/client'
import { create } from 'zustand'

export interface CartProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductCart: (product: CartProduct) => void
  removeProductCart: (product: CartProduct) => void
}

export const useCartStore = create<ICartContext>()((set) => ({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,

  addProductCart: (product) => {
    set((state) => {
      const productIndex = state.products.findIndex((p) => p.id === product.id)

      if (productIndex !== -1) {
        const updateProduct = state.products.map((p, i) => {
          return i === productIndex
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        })
        return { products: updateProduct }
      } else {
        return { products: [...state.products, product] }
      }
    })
  },
  removeProductCart: (product) => {
    set((state) => ({
      products: state.products.filter(
        (productCurrent) => productCurrent.id !== product.id,
      ),
    }))
  },
}))
