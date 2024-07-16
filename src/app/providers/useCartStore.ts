import { Product } from '@prisma/client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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

export const useCartStore = create<ICartContext>()(
  persist(
    (set) => ({
      products: [],
      cartBasePrice: 0,
      cartTotalDiscount: 0,
      cartTotalPrice: 0,

      addProductCart: (product) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.id === product.id,
          )

          if (productIndex !== -1) {
            const updateProduct = state.products
              .map((p, i) => {
                return i === productIndex
                  ? { ...p, quantity: p.quantity + product.quantity }
                  : p
              })
              .filter((p) => p.quantity > 0)
            const basePrice = updateProduct.reduce(
              (acc, p) => acc + Number(p.basePrice) * p.quantity,
              0,
            )
            const discount = updateProduct.reduce(
              (acc, p) =>
                acc +
                (p.discountPercentage / 100) *
                  (Number(p.basePrice) * p.quantity),
              0,
            )

            const total = updateProduct.reduce(
              (acc, p) => acc + Number(p.basePrice) * p.quantity,
              0,
            )
            return {
              products: updateProduct,
              cartBasePrice: basePrice,
              cartTotalDiscount: discount,
              cartTotalPrice: total - discount,
            }
          } else {
            const updateProduct = [...state.products, product]

            const basePriceContext = updateProduct.reduce(
              (acc, p) => acc + Number(p.basePrice) * p.quantity,
              0,
            )

            const discount = updateProduct.reduce(
              (acc, p) =>
                acc +
                (p.discountPercentage / 100) *
                  (Number(p.basePrice) * p.quantity),
              0,
            )

            const total = updateProduct.reduce(
              (acc, p) => acc + Number(p.basePrice) * p.quantity,
              0,
            )
            return {
              products: [...state.products, product],
              cartBasePrice: basePriceContext,
              cartTotalDiscount: discount,
              cartTotalPrice: total - discount,
            }
          }
        })
      },
      removeProductCart: (product) => {
        set((state) => {
          const updateProducts = state.products.filter(
            (productCurrent) => productCurrent.id !== product.id,
          )

          const basePrice = updateProducts.reduce(
            (acc, p) => acc + Number(p.basePrice) * p.quantity,
            0,
          )

          const discount = updateProducts.reduce(
            (acc, p) =>
              acc +
              (p.discountPercentage / 100) * Number(p.basePrice) * p.quantity,
            0,
          )

          const total = updateProducts.reduce(
            (acc, p) => acc + Number(p.basePrice) * p.quantity,
            0,
          )

          return {
            products: updateProducts,
            cartBasePrice: basePrice,
            cartTotalDiscount: discount,
            cartTotalPrice: total - discount,
          }
        })
      },
    }),
    {
      name: 'cart-storage',
      getStorage: () => localStorage,
    },
  ),
)
