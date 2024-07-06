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
import { signIn, signOut, useSession } from 'next-auth/react'

import logo from '../../public/logo.svg'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
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
  const { status, data } = useSession()
  const handleLoginClick = async () => {
    await signIn()
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

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
                  <p className="text-muted-foreground flex-1 overflow-hidden truncate text-sm">
                    Seja bem vindo{' '}
                    <span className="text-foreground">{data.user.name}</span>
                  </p>
                  <p className="text-primary text-xs">Boas compras</p>
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
