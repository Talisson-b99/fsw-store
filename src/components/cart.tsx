'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ShoppingCart } from 'lucide-react'

import { useCartStore } from '@/app/providers/useCartStore'

import CartItem from './cart-item'
import { Badge } from './ui/badge'

const Cart = () => {
  const { products } = useCartStore()
  const [parent] = useAutoAnimate()
  return (
    <div>
      <Badge
        variant={'outline'}
        className="my-[30px] flex w-fit gap-2 border-primary px-3 py-2 font-semibold"
      >
        <ShoppingCart size={14} />
        <span className="text-base">CARRINHO</span>
      </Badge>

      <div className="flex flex-col gap-5" ref={parent}>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Cart
