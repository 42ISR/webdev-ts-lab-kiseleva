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

interface IMenuItem {
  readonly id: string
  title: string
  price: number
  tags?: string[]
  label(): string
}

const orders: IOrder[] = [
  {
    id: "o1",
    customer: { name: "Анна", phone: "+7 900 000-00-01" },
    items: [
      { menuItemId: "m1", title: "капучино", price: 250, quantity: 2 },
      { menuItemId: "m2", title: "круассан", price: 180, quantity: 1 },
    ],
    status: "new",
    createdAt: "2026-11-24T10:00:00",
  },
  {
    id: "o2",
    customer: { name: "Иван", phone: "+7 900 000-00-02" },
    items: [{ menuItemId: "m3", title: "чизкейк", price: 320, quantity: 1 }],
    status: "delivering",
    createdAt: "2026-11-24T10:15:00",
  },
]

const menuItem: IMenuItem = {
  id: "m1",
  title: "капучино",
  price: 250,
  label() {
    return `${this.title} — ${this.price} ₽`
  },
}

function updateOrder(order: IOrder, patch: Partial<IOrder>): IOrder {
  return { ...order, ...patch }
}

const updated = updateOrder(orders[0], { status: "done" })
console.log(updated.status) 
console.log(orders[0].status)

function orderSummary(order: IOrder): Pick<IOrder, "id" | "status"> {
  return { id: order.id, status: order.status }
}

function publicOrder(order: IOrder): Omit<IOrder, "customer"> {
  const { customer, ...rest } = order
  return rest
}

console.log(publicOrder(orders[0]))

function indexOrdersById(orders: IOrder[]): Record<string, IOrder> {
  const result: Record<string, IOrder> = {}
  for (const o of orders) result[o.id] = o
  return result
}
console.log(Object.keys(indexOrdersById(orders)))

function freezeItem(item: IMenuItem): Readonly<IMenuItem> {
  return item
}

const frozen = freezeItem(menuItem)
console.log(frozen.label())

export {}





// //првоерки
// const updated = updateOrder(orders[0], { status: "done" })
// console.log(updated.status)     
// console.log(orders[0].status)   
// console.log(orderSummary(orders[0]))   
// console.log(publicOrder(orders[0]))
// const index = indexOrdersById(orders)
// console.log(Object.keys(index)) 
// const frozen = freezeItem(menuItem)
// console.log(frozen.label())  
// export {}