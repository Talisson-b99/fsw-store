import { Product } from '@prisma/client'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

import { formatCurrency } from '@/helps/format-currency'
import { computeProductTotalPrice } from '@/helps/products'

import { Badge } from './ui/badge'

interface ProductItemProps {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  const productWithDiscount = computeProductTotalPrice(product)
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={productWithDiscount.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt={productWithDiscount.name}
          className="h-[120px] w-auto object-contain"
        />
        {productWithDiscount.discountPercentage > 0 && (
          <Badge className="absolute left-2.5 top-2.5 font-semibold">
            <ArrowDown size={10} />
            {productWithDiscount.discountPercentage}%
          </Badge>
        )}
      </div>

      <div>
        <p className="truncate text-sm">{productWithDiscount.name}</p>
        <div className="flex items-center gap-1">
          <p className="font-semibold">
            {formatCurrency(productWithDiscount.totalPrice)}
          </p>
          {productWithDiscount.discountPercentage > 0 && (
            <span className="truncate text-xs font-normal text-muted-foreground">
              {formatCurrency(Number(productWithDiscount.basePrice))}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
