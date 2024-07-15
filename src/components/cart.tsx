'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ShoppingCart } from 'lucide-react'

import { useCartStore } from '@/app/providers/useCartStore'
import { formatCurrency } from '@/helps/format-currency'

import CartItem from './cart-item'
import { Badge } from './ui/badge'
import { Table, TableBody, TableCell, TableRow } from './ui/table'

const Cart = () => {
  const { products, cartBasePrice, cartTotalDiscount, cartTotalPrice } =
    useCartStore()
  const [parent] = useAutoAnimate()
  return (
    <div>
      <Badge
        variant={'outline'}
        className="my-[30px] flex w-fit gap-2 border-primary px-3 py-2 font-semibold"
      >
        <ShoppingCart size={14} />
        <span className="text-base">CARRINHO</span>
      </Badge>

      <div
        className="flex h-[60vh] flex-col gap-5 overflow-y-scroll [&::-webkit-scrollbar]:hidden"
        ref={parent}
      >
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
      {products.length > 0 && (
        <div>
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
        </div>
      )}
    </div>
  )
}

export default Cart
