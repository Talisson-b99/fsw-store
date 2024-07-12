import prisma from '@/lib/prisma'

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
      <h1>Pagiona de detalhes do produto</h1>
    </div>
  )
}

export default ProductDetailsPage
