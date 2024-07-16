'use client'

import {
  Home,
  ListOrdered,
  LogIn,
  LogOut,
  Menu,
  Percent,
  ShoppingCart,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

import logo from '../../public/logo.svg'
import Cart from './cart'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const Header = () => {
  const { status, data } = useSession()
  const [open, setOpen] = useState(false)
  const handleLoginClick = async () => {
    await signIn()
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  const handleClose = () => setOpen((state) => !state)

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <div className="flex items-center justify-between p-5">
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="flex size-8 items-center justify-center p-0"
          >
            <Menu size={16} />
          </Button>
        </SheetTrigger>
        <Link href={'/'}>
          <Image src={logo} alt="fsw store" />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="flex size-8 items-center justify-center p-0"
            >
              <ShoppingCart size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[85%]">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
      <Separator />
      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-bold">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-2 space-y-3">
          {status === 'authenticated' && data.user && (
            <>
              <div className="flex items-center gap-3 overflow-hidden">
                <Avatar>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                  <AvatarFallback>
                    {data?.user?.name?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="flex-1 overflow-hidden truncate text-sm text-muted-foreground">
                    Seja bem vindo{' '}
                    <span className="text-foreground">{data.user.name}</span>
                  </p>
                  <p className="text-xs text-primary">Boas compras</p>
                </div>
              </div>
              <Separator />
            </>
          )}
          {status === 'unauthenticated' && (
            <Button
              onClick={handleLoginClick}
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <LogIn size={16} />
              Fazer Login
            </Button>
          )}

          {status === 'authenticated' && (
            <Button
              onClick={handleLogoutClick}
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <LogOut size={16} />
              Fazer Logout
            </Button>
          )}
          <Link href={'/'} legacyBehavior passHref>
            <Button
              onClick={handleClose}
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <a>
                <Home size={16} />
                Início
              </a>
            </Button>
          </Link>
          <SheetClose asChild>
            <Link href={'/deals'} passHref legacyBehavior>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Percent size={16} />
                Ofertas
              </Button>
            </Link>
          </SheetClose>

          <Link href={'/catalog'} passHref legacyBehavior>
            <Button
              onClick={handleClose}
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <a>
                <ListOrdered size={16} />
                Catálogo
              </a>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Header
