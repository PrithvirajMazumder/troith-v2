import type { Taxation } from '~/types/Taxation'

export type Item = {
  name: string
  quantity: number
  price: number
	hsn?: number
  id?: string
  tax?: Taxation
}
