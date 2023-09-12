import { writable, type Writable } from 'svelte/store'
import type { Party } from '~/types/Party'
import type { InvoiceItem } from '@pages/invoices/_types/Invoice'

export const selectedPartyForInvoice: Writable<Party | null> = writable(null)
export const selectedItemsForInvoice: Writable<InvoiceItem[]> = writable([])

export const selectPartyForInvoice = (party: Party) => {
  selectedPartyForInvoice.set(party)
}

export const selectItemsForInvoice = (items: InvoiceItem[]) => {
  selectedItemsForInvoice.set(items)
}

export const resetCreateInvoiceData = () => {
  selectedItemsForInvoice.set([])
  selectedPartyForInvoice.set(null)
}
