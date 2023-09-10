import type { Item } from '~/types/Item'
import type { Party } from '~/types/Party.ts'

export type Invoice = {
  no: string
  id: string
  items: Item[]
  party: Party
}
