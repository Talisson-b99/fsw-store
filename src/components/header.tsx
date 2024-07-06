import { Menu, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

import logo from '../../public/logo.svg'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-5">
        <Button
          variant="outline"
          className="flex size-8 items-center justify-center p-0"
        >
          <Menu size={16} />
        </Button>
        <Image src={logo} alt="fsw store" />
        <Button
          variant="outline"
          className="flex size-8 items-center justify-center p-0"
        >
          <ShoppingCart size={16} />
        </Button>
      </div>
      <Separator />
    </>
  )
}

export default Header
