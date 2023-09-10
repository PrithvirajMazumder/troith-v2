import { supabase } from '~/supabase.ts'

export const getAllInvoices = async () => {
  return supabase
    .from('invoices')
    .select(
      'id, no, date, company:companies(*), vehicleNo:vehicle_no, party:parties(*), status:invoice_statuses(*), items:invoice_items(invoice_tax:taxations(*), invoice_price, invoice_quantity, item:items(*))'
    )
}
