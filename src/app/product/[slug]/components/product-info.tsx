'use client'

import { Product } from '@prisma/client'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/helps/format-currency'
import { computeProductTotalPrice } from '@/helps/products'

interface ProductInfoProps {
  product: Product
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const productWithDiscount = computeProductTotalPrice(product)
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) return
    setQuantity((prev) => prev - 1)
  }

  return (
    <div className="px-5">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="">{productWithDiscount.conditions}</span>
        <div className="h-2 w-px bg-muted-foreground" />
        <span className="">100 vendidos</span>
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <p className="text-lg font-medium leading-none">
          {productWithDiscount.name}
        </p>
        {productWithDiscount.stock > 0 ? (
          <span className="text-xs text-primary">Disponível em estoque</span>
        ) : (
          <span className="text-xs text-red-400">Indisponível em estoque</span>
        )}
      </div>

      <div className="mt-3 flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            {formatCurrency(productWithDiscount.totalPrice)}
          </span>
          {productWithDiscount.discountPercentage > 0 && (
            <Badge className="left-2.5 top-2.5 font-bold">
              <ArrowDown size={10} className="font-bol" />
              {productWithDiscount.discountPercentage}%
            </Badge>
          )}
        </div>
        <span className="text-sm text-muted-foreground">
          De:{' '}
          <span className="line-through">
            {formatCurrency(Number(productWithDiscount.basePrice))}
          </span>
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-white">
        <Button
          onClick={handleDecreaseQuantity}
          size={'icon'}
          variant={'outline'}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <span className="w-5 text-center">{quantity}</span>
        <Button
          onClick={handleIncreaseQuantity}
          size={'icon'}
          variant={'outline'}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="mt-3">
        <p className="text-sm font-bold">Descrição</p>
        <span className="text-xs text-muted-foreground">
          {productWithDiscount.description}
        </span>
      </div>

      <div className="my-8 space-y-5">
        <Button className="w-full text-sm font-bold">
          Adicionar ao carrinho
        </Button>
        <div className="flex h-16 items-center gap-3 rounded-md bg-accent px-6 py-2">
          <Image
            src={'/truck-frete.svg'}
            width={30}
            height={20}
            alt="logo transportadora"
          />
          <div>
            <span className="block text-xs">
              Entrega via <span className="font-bold italic">FSPacket®</span>
            </span>
            <span className="block text-xs text-primary">
              Envio para <span className="font-bold">todo Brasil</span>
            </span>
          </div>
          <div className="ml-auto font-bold">Frete grátis</div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
