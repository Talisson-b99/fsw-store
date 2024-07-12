import { Category } from '@prisma/client'
import Image from 'next/image'

interface CatalogItemProps {
  category: Category
}

const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <div className="flex w-full max-w-[180px] flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="flex h-[150px] w-[100%] items-center justify-center bg-gradient-to-bl from-[#5033C3] to-purple-bg-light">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[70%] w-[80%] object-contain"
        />
      </div>
      <span className="w-full bg-accent p-3 text-center text-sm font-semibold">
        {category.name}
      </span>
    </div>
  )
}

export default CatalogItem
