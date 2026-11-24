type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled"

interface ICustomer {
  name: string
  phone: string
}

interface IOrderItem {
  menuItemId: string
  title: string
  price: number
  quantity: number
  comment?: string
}

interface IOrder {
  id: string
  customer: ICustomer
  items: IOrderItem[]
  status: OrderStatus
  createdAt: string
}

const orders: IOrder[] = [
     {
       id: "o1",
       customer: { name: "Анна", phone: "+7 900 000-00-01" },
       items: [{ menuItemId: "m1", title: "Капучино", price: 250, quantity: 2 }],
       status: "new",
       createdAt: "2026-11-24T10:00:00",
     },
     {
       id: "o2",
       customer: { name: "Иван", phone: "+7 900 000-00-02" },
       items: [{ menuItemId: "m2", title: "Круассан", price: 180, quantity: 1 }],
       status: "delivering",
       createdAt: "2026-11-24T10:15:00",
     },
     {
       id: "o3",
       customer: { name: "Мария", phone: "+7 900 000-00-03" },
       items: [{ menuItemId: "m3", title: "Чизкейк", price: 320, quantity: 1 }],
       status: "done",
       createdAt: "2026-11-24T09:40:00",
     },
     {
       id: "o4",
       customer: { name: "Пётр", phone: "+7 900 000-00-04" },
       items: [{ menuItemId: "m2", title: "Круассан", price: 180, quantity: 3 }],
       status: "new",
       createdAt: "2026-11-24T10:20:00",
     },
   ]

function filterByStatus(orders: IOrder[], status: OrderStatus): IOrder[] {
  return orders.filter((order) => order.status === status)
}

const newOrders = filterByStatus(orders, "new")
console.log(newOrders.map((o) => o.id))

// gjbcr
function findOrder(orders: IOrder[], id: string): IOrder | undefined {
  return orders.find((o) => o.id === id)
}

const found = findOrder(orders, "o2")
if (found) {
  console.log(found.id)
} else {
  console.log("заказ не найден")
}

console.log(countByStatus(orders))

if (found) {
  console.log(found.id)
} else {
  console.log("заказ не найден")
}

const missing = findOrder(orders, "o22")
if (missing) {
  console.log(missing.id)
} else {
  console.log("заказ не найден") 
}

function countByStatus(orders: IOrder[]): Record<OrderStatus, number> {
  const result: Record<OrderStatus, number> = { new: 0, cooking: 0, delivering: 0, done: 0, cancelled: 0,}
  for (const order of orders) {
    result[order.status]++
  }

  return result
}
type Delivery = { kind: "pickup" } | { kind: "courier"; address: string; fee: number }

function deliveryCost(delivery: Delivery): number {
  if (delivery.kind === "pickup") {
    return 0
  }
  return delivery.fee
}

const pickup: Delivery = { kind: "pickup" }
const courier: Delivery = { kind: "courier", address: "ул. Ленина, 5", fee: 150 }

console.log(deliveryCost(pickup)) 
console.log(deliveryCost(courier)) 

function deliveryLabel(delivery: Delivery): string {
  if (delivery.kind === "pickup") {
    return "самовывоз"
  }
  return `Курьер: ${delivery.address}`
}

console.log(deliveryLabel(pickup))
console.log(deliveryLabel(courier)) 

export {}




