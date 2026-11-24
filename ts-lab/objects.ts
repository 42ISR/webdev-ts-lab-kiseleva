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