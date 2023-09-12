import type { Step } from '~/types/Step'
import type { createInvoiceStepNames } from '@pages/invoices/_constants/InvoiceSteps'

export type CreateInvoiceStepNames = (typeof createInvoiceStepNames)[number]
export type InvoiceStep = Omit<Step, 'name'> & { name: CreateInvoiceStepNames }
export type InvoiceSteps = Record<number, InvoiceStep>
