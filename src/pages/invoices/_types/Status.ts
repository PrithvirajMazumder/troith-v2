import { invoiceStatuses } from '@pages/invoices/_constants/Statuses'

export type InvoiceStatuses = (typeof invoiceStatuses)[keyof typeof invoiceStatuses]

export type Status = {
  name: InvoiceStatuses
  step: number
  id?: string
}
