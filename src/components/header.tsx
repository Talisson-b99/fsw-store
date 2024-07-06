import {
  Home,
  ListOrdered,
  LogIn,
  Menu,
  Percent,
  ShoppingCart,
} from 'lucide-react'
import Image from 'next/image'

import logo from '../../public/logo.svg'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const Header = () => {
  return (
    <Sheet>
      <div className="flex justify-between p-5">
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="flex size-8 items-center justify-center p-0"
          >
            <Menu size={16} />
          </Button>
        </SheetTrigger>
        <Image src={logo} alt="fsw store" />
        <Button
          variant="outline"
          className="flex size-8 items-center justify-center p-0"
        >
          <ShoppingCart size={16} />
        </Button>
      </div>
      <Separator />
      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-bold">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-2 space-y-2">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogIn size={16} />
            Fazer Login
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <Home size={16} />
            Início
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <Percent size={16} />
            Ofertas
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <ListOrdered size={16} />
            Catálogo
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Header
