import { Category } from '@prisma/client'
import {
  Headphones,
  KeyboardIcon,
  Monitor,
  MouseIcon,
  Speaker,
  Square,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category: { name, slug } }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={18} />,
    monitors: <Monitor size={18} />,
    headphones: <Headphones size={18} />,
    mousepads: <Square size={18} />,
    speakers: <Speaker size={18} />,
    mouses: <MouseIcon size={18} />,
  }
  return (
    <Badge
      variant={'outline'}
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[slug as keyof typeof categoryIcon]}
      <span className="text-xs font-semibold">{name}</span>
    </Badge>
  )
}

export default CategoryItem
