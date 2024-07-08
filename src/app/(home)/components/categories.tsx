import prisma from '@/lib/prisma'

import CategoryItem from './category-item'

const Categories = async () => {
  const categories = await prisma.category.findMany({})
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 px-5 pt-2.5">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Categories
