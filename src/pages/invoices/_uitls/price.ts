import type { InvoiceItem } from "@pages/invoices/_types/Invoice"

export const getTotalPrice = (items: InvoiceItem[]) => {
  return items.reduce((accumulator, current) => accumulator + current.item.price * current.item.quantity, 0)
}
