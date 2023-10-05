import type { InvoiceSteps } from '@pages/invoices/_types/Step'

export const createInvoiceStepNames = ['select a party', 'choose items', 'configure items', 'choose tax scheme', 'select bank account'] as const

export const invoiceSteps: InvoiceSteps = createInvoiceStepNames.reduce((invoiceStep: InvoiceSteps, stepName, index) => {
  const stepNo = index + 1
  invoiceStep[stepNo] = {
    name: stepName,
    stepNo,
    isCompleted: false,
    isCurrent: index === 0,
  }

  return invoiceStep
}, {})
