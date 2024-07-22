import { PackageSearch } from 'lucide-react'
import { getServerSession } from 'next-auth'

import { Badge } from '@/components/ui/badge'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

import OrderItem from './components/order-item'

export const dynamic = 'force-dynamic'

const OrdersPage = async () => {
  const user = await getServerSession(authOptions)
  console.log(user)

  if (!user) {
    return <p>Access Denied</p>
  }

  const orders = await prisma.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })

  return (
    <div className="p-5">
      <Badge
        variant={'outline'}
        className="my-[30px] flex w-fit gap-2 border-primary px-3 py-2 font-semibold"
      >
        <PackageSearch size={14} />
        <span className="text-base">Meus Pedidos</span>
      </Badge>

      <div className="flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    </div>
  )
}

export default OrdersPage
