import type { APIRoute } from 'astro'
import { getAllParties } from '@pages/api/parties/_queries/index'

export const GET: APIRoute = async () => {
  const { data: parties, error, status } = await getAllParties()
  const resp = parties.map((party) => ({
    ...party,
    items: party.items.map((item) => ({ ...item.item })),
  }))

  return new Response(
    JSON.stringify({
      data: resp,
      error,
    }),
    {
      status,
    }
  )
}
