import type { Item } from "~/types/Item"

export const getTotalPrice = (items: Pick<Item, 'price' | 'quantity'>[]) => {
  return items.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0)
}
