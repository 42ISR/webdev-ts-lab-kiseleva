type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled"

interface IMenuItem {
    readonly id: string
    title: string
    price: number
    tags?: string[]
    label(): string
}

const menu: IMenuItem[] = [
    { id: "m1", title: "Капучино", price: 250, label(){ return `${this.title} - ${this.price} `} },
    { id: "m2", title: "Круасан", price: 180, label(){ return `${this.title} - ${this.price} `} },
    { id: "m3", title: "Чизкейк", price: 320, label(){ return `${this.title} - ${this.price} `} },  
]

for (const item of menu) {
  console.log(item.label())
}


interface IOrderItem {
  menuItemId: string
  title: string
  price: number
  quantity: number
  comment?: string
}

function itemTotal(item: IOrderItem): number {
  return item.price * item.quantity
}

const cappuccino: IOrderItem = {
  menuItemId: "m1",
  title: "Капучино",
  price: 250,
  quantity: 2,
}
console.log(itemTotal(cappuccino)) 


interface ICustomer {
  name: string
  phone: string
}

interface IOrder {
  id: string
  customer: ICustomer
  items: IOrderItem[]
  status: OrderStatus
  createdAt: string
}

function orderTotal(order: IOrder): number {
  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

const order: IOrder = {
  id: "o1",
  customer: { name: "Анна", phone: "+7 900 000-00-01" },
  items: [
    { menuItemId: "m1", title: "капучино", price: 250, quantity: 2 },
    { menuItemId: "m2", title: "круассан", price: 180, quantity: 1 },
  ],
  status: "new",
  createdAt: "2026-11-24T10:00:00",
}
console.log(orderTotal(order))

const {
  id,
  status,
  customer: { name },
} = order
console.log(id, status, name) 

const { title, comment = "без комментария" } = order.items[0]
console.log(title, comment) 


function canAfford(wallet: { balance: number }, price: number): boolean {
  return wallet.balance >= price
}

const wallet = { balance: 500, currency: "RUB" }
console.log(canAfford(wallet, 300)) 

export {}