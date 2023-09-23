import { supabase } from '~/supabase.ts'

export const getAllItems = async () => {
  return supabase.from('items').select('*')
}
