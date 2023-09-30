import { invoiceSteps } from '@pages/invoices/_constants/InvoiceSteps'
import type { InvoiceStep, InvoiceSteps } from '@pages/invoices/_types/Step'
import { writable, type Writable } from 'svelte/store'

export const createInvoiceSteps: Writable<InvoiceSteps> = writable(invoiceSteps)
export const currentCreateInvoiceStep: Writable<InvoiceStep> = writable(invoiceSteps[1])

export const setCurrentCreateInvoiceStep = (stepNo: number) => {
  const unSubscribe = createInvoiceSteps.subscribe((stepsData) => {
    currentCreateInvoiceStep.update(() => stepsData[stepNo])
  })
  unSubscribe()
}

export const completeCreateInvoiceStep = (stepNo: number) => {
  createInvoiceSteps.update((previousSteps) => {
    previousSteps[stepNo].isCompleted = true
    previousSteps[stepNo].isCurrent = true
    
    return previousSteps
  })
  setCurrentCreateInvoiceStep(stepNo + 1)
}

export const resetCreateInvoiceSteps = () => {
  createInvoiceSteps.set(invoiceSteps)
  currentCreateInvoiceStep.set(invoiceSteps[1])
}
