import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { useMemo } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { formatCurrency } from '@/helps/format-currency'

import OrderProductItem from './order-product-item'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  }>
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      )
    }, 0)
  }, [order.orderProducts])

  const discounts = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc +
        ((orderProduct.discountPercentage * Number(orderProduct.basePrice)) /
          100) *
          orderProduct.quantity
      )
    }, 0)
  }, [])

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc +
        Number(orderProduct.basePrice) -
        ((orderProduct.discountPercentage * Number(orderProduct.basePrice)) /
          100) *
          orderProduct.quantity
      )
    }, 0)
  }, [])

  return (
    <Card className="px-5 outline-none">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger className="outline-none">
            <div className="ap-1 flex flex-col text-left">
              Pedido com {order.orderProducts.length} produtos
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p>Status</p>
                  <p className="font-bold text-primary">
                    {order.status === 'PAYMENT_CONFIRMED'
                      ? 'pago'
                      : 'aguardando pagamento'}
                  </p>
                </div>

                <div>
                  <p className="font-bold">Data</p>
                  <p className="text-muted-foreground">
                    {format(order.createAt, 'd/MM/yy')}
                  </p>
                </div>

                <div>
                  <p className="font-bold">Pagamento</p>
                  <p className="text-muted-foreground">Cartão</p>
                </div>
              </div>
              <Separator className="my-5" />
              <div>
                <div className="flex flex-col gap-5">
                  {order.orderProducts.map((order) => (
                    <OrderProductItem orderProduct={order} />
                  ))}
                </div>

                <div>
                  <Table>
                    <TableBody>
                      <TableRow className="bg-none">
                        <TableCell className="text-sm">Entrega</TableCell>
                        <TableCell className="text-right text-sm">
                          GRÁTIS
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Subtotal</TableCell>
                        <TableCell className="text-right text-sm">
                          {formatCurrency(subtotal)}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="text-sm">Descontos</TableCell>
                        <TableCell className="text-right text-sm">
                          {formatCurrency(discounts)}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="text-sm font-bold">
                          Total
                        </TableCell>
                        <TableCell className="text-right text-sm font-bold">
                          {formatCurrency(total)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}

export default OrderItem
