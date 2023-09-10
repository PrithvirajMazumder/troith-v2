import { supabase } from '~/supabase.ts'

export const getAllInvoices = async () => {
  return supabase.from('invoices').select('id, no, company:companies(*), vehicleNo:vehicle_no, party:parties(*), items:invoice_items(*)',)
}