import Image from 'next/image'

import prisma from '@/lib/prisma'

import Categories from './components/categories'
import ProductList from './components/product-list'

export default async function Home() {
  const productsWithDiscount = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
  })
  return (
    <>
      <div className="p-5">
        <Image
          src="/banner-home-01.png"
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
          className="h-auto w-full"
          alt="até 55% de desconto em mouses"
        />
      </div>
      <Categories />

      <div className="pt-[30px]">
        <ProductList title="Ofertas" products={productsWithDiscount} />
      </div>
    </>
  )
}
