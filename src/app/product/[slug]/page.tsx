import ProductList from '@/app/(home)/components/product-list'
import prisma from '@/lib/prisma'

import ProductImages from './components/product-images'
import ProductInfo from './components/product-info'

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

  const recommendedProducts = await prisma.category.findFirst({
    where: {
      id: product?.categoryId,
    },
    include: {
      products: true,
    },
  })

  if (!product || !recommendedProducts) return null

  return (
    <div>
      <ProductImages imagesUrls={product.imageUrls} name={product.name} />

      <div className="mt-8">
        <ProductInfo product={product} />
      </div>

      <div className="mb-20 mt-8">
        <ProductList
          title="Produtos recomendados"
          products={recommendedProducts.products}
        />
      </div>
    </div>
  )
}

export default ProductDetailsPage
