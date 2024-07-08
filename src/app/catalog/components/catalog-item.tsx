import { Category } from '@prisma/client'
import Image from 'next/image'

interface CatalogItemProps {
  category: Category
}

const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <div className="flex max-w-[160px] flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="to-[rgba(80, 51, 195, 0.20)] flex h-[150px] w-[160px] items-center justify-center bg-gradient-to-bl from-[#5033C3]">
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
