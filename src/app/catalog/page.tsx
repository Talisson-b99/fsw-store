import { LayoutGrid } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import prisma from '@/lib/prisma'

import CatalogItem from './components/catalog-item'

const Catalog = async () => {
  const categories = await prisma.category.findMany({})

  return (
    <div className="px-5">
      <Badge
        variant={'outline'}
        className="my-[30px] flex w-fit gap-2 px-3 py-2 font-semibold"
      >
        <LayoutGrid size={14} />
        <span className="text-base">CATÁLAGO</span>
      </Badge>

      <div className="grid grid-cols-2 justify-items-center gap-8 pb-16">
        {categories.map((categorie) => (
          <CatalogItem key={categorie.id} category={categorie} />
        ))}
      </div>
    </div>
  )
}

export default Catalog
