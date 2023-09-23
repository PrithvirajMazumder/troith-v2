import type { APIRoute } from 'astro'
import { getAllItems } from './_queries'

export const GET: APIRoute = async () => {
  const { data, error, status } = await getAllItems()

  return new Response(JSON.stringify({
    data,
    error,
  }), {
    status,
  })
}