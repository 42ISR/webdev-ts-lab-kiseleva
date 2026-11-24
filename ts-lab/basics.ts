type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled"
type Discount = 0 | 5 | 10 | 15

function statusLabel(status: OrderStatus): string {
  switch (status) {
    case "new": return "Новый"
    case "cooking": return "Готовится"
    case "delivering": return "В доставке"
    case "done": return "Завершён"
    case "cancelled": return "Отменён"
  }
}
console.log(statusLabel("new"))
console.log(statusLabel("cooking"))
console.log(statusLabel("delivering"))
console.log(statusLabel("done"))
console.log(statusLabel("cancelled"))

function orderTotal(price: number, quantity: number, deliveryFee: number = 0): number {
  return price * quantity + deliveryFee
}

console.log(orderTotal(250, 2, 100)) 
console.log(orderTotal(250, 2)) 

function isFinalStatus(status: OrderStatus): boolean {
  return status === "done" || status === "cancelled"
}

function parseQuantity(raw: unknown): number | null {
  const n = typeof raw === "string" ? Number(raw) : raw
  if (typeof n === "number" && Number.isInteger(n) && n > 0) return n
  return null
}
console.log(parseQuantity("2"))
console.log(parseQuantity(2)) 
console.log(parseQuantity(2.5)) 
console.log(parseQuantity(-1)) 

function applyDiscount(total: number, discount: Discount): number {
  return total - total * discount / 100
}

console.log(applyDiscount(1000, 0))
console.log(applyDiscount(1000, 10))
console.log(applyDiscount(1000, 15)) 