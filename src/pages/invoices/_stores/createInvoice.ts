import { writable, type Writable } from 'svelte/store'
import type { Party } from '~/types/Party'
import type { InvoiceItem } from '@pages/invoices/_types/Invoice'
import type { Item } from '~/types/Item'

export const selectedPartyForInvoice: Writable<Party | null> = writable(null)
export const selectedItemsForInvoice: Writable<Item[]> = writable([])
export const selectedInvoiceItemsForInvoice: Writable<InvoiceItem[]> = writable([])

export const selectPartyForInvoice = (party: Party) => {
  selectedPartyForInvoice.set(party)
}

export const selectItemsForInvoice = (items: Item[]) => {
  selectedItemsForInvoice.set(items)
}

export const selectInvoiceItemsForInvoice = (items: InvoiceItem[]) => {
  selectedInvoiceItemsForInvoice.set(items)
}

export const resetCreateInvoiceData = () => {
  selectedItemsForInvoice.set([])
  selectedPartyForInvoice.set(null)
  selectedInvoiceItemsForInvoice.set([])
}
