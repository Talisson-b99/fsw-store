import { Mouse } from 'lucide-react'

import ProductItem from '@/components/product-item'
import { Badge } from '@/components/ui/badge'
import prisma from '@/lib/prisma'

interface ProductPageProps {
  params: {
    slug: string
  }
}

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const category = await prisma.category.findFirst({
    where: {
      slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) return

  return (
    <div className="px-5">
      <Badge
        variant={'outline'}
        className="my-[30px] flex w-fit gap-2 px-3 py-2 font-semibold"
      >
        <Mouse size={14} />
        <span className="text-base">Mouses</span>
      </Badge>

      <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 pb-20">
        {category.products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
