import type { Item } from '~/types/Item'
import type { Party } from '~/types/Party.ts'
import type { Status } from '@pages/invoices/_types/Status'
import type { Taxation } from '~/types/Taxation'

export type InvoiceItem = {
  invoice_quantity: number
  invoice_price: number
  invoice_tax: Taxation
  item: Item
}

export type Invoice = {
  no: string
  id: string
  status: Status
  items: InvoiceItem[]
  date: Date | string
  party: Party
}
