import type { InvoiceSteps } from '@pages/invoices/_types/Step'

export const createInvoiceStepNames = ['Select a party', 'Choose items', 'Choose tax scheme', 'Select bank account'] as const

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
