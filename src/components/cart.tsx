import { ShoppingCart } from 'lucide-react'

import { useCartStore } from '@/app/providers/useCartStore'

import { Badge } from './ui/badge'

const Cart = () => {
  const { products } = useCartStore()
  return (
    <div>
      <Badge
        variant={'outline'}
        className="my-[30px] flex w-fit gap-2 px-3 py-2 font-semibold"
      >
        <ShoppingCart size={14} />
        <span className="text-base">CATÁLAGO</span>
      </Badge>

      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  )
}

export default Cart
