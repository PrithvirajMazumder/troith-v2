import type { Item } from '~/types/Item'
import type { Taxation } from '~/types/Taxation'

export type Party = {
  name: string
  address: string
  phone: number
  gstin: string
  pin?: number
  city?: string
  email?: string
  items?: Item[]
  suggestedTax?: Taxation
  id?: string
}
