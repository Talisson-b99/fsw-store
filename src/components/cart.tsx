'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { loadStripe } from '@stripe/stripe-js'
import { ShoppingCart } from 'lucide-react'
import { useSession } from 'next-auth/react'

import { createCheckout } from '@/actions/checkout'
import { createOrder } from '@/actions/order'
import { useCartStore } from '@/app/providers/useCartStore'
import { formatCurrency } from '@/helps/format-currency'

import CartItem from './cart-item'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Table, TableBody, TableCell, TableRow } from './ui/table'

const Cart = () => {
  const { data } = useSession()
  const { products, cartBasePrice, cartTotalDiscount, cartTotalPrice } =
    useCartStore()
  const [parent] = useAutoAnimate()

  async function handleFinishPurchaseClick() {
    if (!data?.user) return
    await createOrder(products, (data.user as any).id)

    const checkout = await createCheckout(products)

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    })
  }

  return (
    <div className="flex h-screen flex-col">
      <Badge
        variant={'outline'}
        className="my-[30px] flex w-fit gap-2 border-primary px-3 py-2 font-semibold"
      >
        <ShoppingCart size={14} />
        <span className="text-base">CARRINHO</span>
      </Badge>

      <div
        className="flex flex-1 flex-col gap-5 overflow-y-scroll [&::-webkit-scrollbar]:hidden"
        ref={parent}
      >
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
      {products.length > 0 && (
        <div className="flex- mb-12 flex flex-col">
          <Table>
            <TableBody>
              <TableRow className="bg-none">
                <TableCell className="text-sm">Entrega</TableCell>
                <TableCell className="text-right text-sm">GRÁTIS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">Subtotal</TableCell>
                <TableCell className="text-right text-sm">
                  {formatCurrency(cartBasePrice)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-sm">Descontos</TableCell>
                <TableCell className="text-right text-sm">
                  {formatCurrency(cartTotalDiscount)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-sm font-bold">Total</TableCell>
                <TableCell className="text-right text-sm font-bold">
                  {formatCurrency(cartTotalPrice)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            className="text-sm font-bold"
            onClick={handleFinishPurchaseClick}
          >
            Finalizar Compra
          </Button>
        </div>
      )}
    </div>
  )
}

export default Cart
