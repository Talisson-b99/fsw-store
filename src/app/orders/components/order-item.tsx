import { Order, Prisma } from '@prisma/client'
import { format } from 'date-fns'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: true
    }
  }>
}

const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="ap-1 flex flex-col text-left">
              Pedido com {order.orderProducts.length} produtos
            </div>
          </AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}

export default OrderItem
