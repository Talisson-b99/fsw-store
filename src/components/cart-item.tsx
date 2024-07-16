import { ChevronLeft, ChevronRight, TrashIcon } from 'lucide-react'
import Image from 'next/image'

import { CartProduct, useCartStore } from '@/app/providers/useCartStore'
import { formatCurrency } from '@/helps/format-currency'
import { computeProductTotalPrice } from '@/helps/products'

import { Button } from './ui/button'

interface CartItemProps {
  product: CartProduct
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeProductCart, addProductCart } = useCartStore()
  const productWithDiscount = computeProductTotalPrice(product)
  // const [quantity] = useState(1)

  function handleIncreaseProductCart() {
    addProductCart({ ...product, quantity: 1 })
  }

  function handleDecreaseProductCart() {
    addProductCart({ ...product, quantity: -1 })
  }

  function handleRemoveProductCart() {
    removeProductCart(product)
  }
  return (
    <div className="grid grid-cols-4 items-center gap-x-3">
      <div className="flex h-full max-h-20 w-full max-w-20 items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="auto"
          alt={product.name}
          className="object-container h-[80%] w-[90%] p-1"
        />
      </div>
      <div className="col-span-2 flex flex-col space-y-1">
        <p className="truncate text-xs">{productWithDiscount.name}</p>
        <div className="flex items-center gap-1">
          <span className="block text-sm font-bold">
            {formatCurrency(productWithDiscount.totalPrice)}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatCurrency(Number(productWithDiscount.basePrice))}
          </span>
        </div>
        <div className="flex gap-1">
          <Button
            size={'icon'}
            variant={'outline'}
            className="h-6 w-6"
            onClick={handleDecreaseProductCart}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <span className="w-5 text-center">{product.quantity}</span>
          <Button
            size={'icon'}
            variant={'outline'}
            className="h-6 w-6"
            onClick={handleIncreaseProductCart}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
      <Button
        variant={'outline'}
        className="ml-auto size-8 p-0"
        onClick={handleRemoveProductCart}
      >
        <TrashIcon className="size-4" />
      </Button>
    </div>
  )
}

export default CartItem
