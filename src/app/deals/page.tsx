import { Percent } from 'lucide-react'

import ProductItem from '@/components/product-item'
import { Badge } from '@/components/ui/badge'
import prisma from '@/lib/prisma'

const DealsPage = async () => {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })
  return (
    <div>
      <Badge
        variant={'outline'}
        className="mx-5 my-[30px] flex w-fit gap-2 border-primary px-3 py-2 font-semibold"
      >
        <Percent size={14} />
        <span className="text-base">OFERTAS</span>
      </Badge>
      <div className="grid grid-cols-2 justify-items-center gap-y-6 pb-10">
        {deals.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  )
}

export default DealsPage
