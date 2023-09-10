import type { Item } from '~/types/Item'
import type { Party } from '~/types/Party.ts'
import type { Status } from '@pages/invoices/_types/Status'

export type Invoice = {
  no: string
  id: string
  status: Status
  items: Item[]
  party: Party
}
