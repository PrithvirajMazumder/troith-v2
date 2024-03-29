import type { APIRoute } from 'astro'
import { getAllInvoices } from './_queries'

export const GET: APIRoute = async () => {
  const { data, error, status } = await getAllInvoices()

  return new Response(JSON.stringify({
    data,
    error,
  }), {
    status,
  })
}