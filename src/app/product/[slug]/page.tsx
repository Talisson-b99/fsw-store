import prisma from '@/lib/prisma'

import ProductImages from './components/product-images'

interface ProductDetailsPageProps {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prisma.product.findFirst({
    where: {
      slug,
    },
  })

  if (!product) return null
  return (
    <div>
      <ProductImages imagesUrls={product.imageUrls} name={product.name} />
    </div>
  )
}

export default ProductDetailsPage
