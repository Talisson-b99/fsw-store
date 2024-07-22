import { Prisma } from '@prisma/client'
import Image from 'next/image'

import { formatCurrency } from '@/helps/format-currency'
import { computeProductTotalPrice } from '@/helps/products'

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true
    }
  }>
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithDiscount = computeProductTotalPrice(orderProduct.product)
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={productWithDiscount.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          alt={productWithDiscount.name}
        />
      </div>
      <div className="space-y-2">
        <div className="rounded-md bg-accent px-2.5 py-1 text-xs">
          <p>
            Vendido e entregue por:{' '}
            <span className="font-semibold">FSW Store</span>
          </p>
        </div>
        <p className="max-w-[180px] truncate">{productWithDiscount.name}</p>

        <div className="flex items-baseline">
          <p className="text-sm font-bold">
            {formatCurrency(productWithDiscount.totalPrice)}
          </p>
          <p className="text-xs text-muted-foreground line-through">
            {formatCurrency(Number(productWithDiscount.basePrice))}
          </p>
          <p className="ml-auto text-xs text-muted-foreground">
            Qtd: {orderProduct.quantity}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderProductItem
