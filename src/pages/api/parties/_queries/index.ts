import { supabase } from '~/supabase'

export const getAllParties = () => {
  return supabase.from('parties').select('*, items:party_items(item:items(*))')
}
