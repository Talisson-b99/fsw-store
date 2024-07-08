import { Product } from '@prisma/client'

import ProductItem from '@/components/product-item'

interface ProductListProps {
  products: Product[]
  title: string
}

const ProductList = ({ products, title }: ProductListProps) => {
  return (
    <div>
      <h2 className="mb-5 px-5 font-bold uppercase">{title}</h2>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
