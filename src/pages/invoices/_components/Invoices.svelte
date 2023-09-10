<script lang="ts">
  import type { Invoice } from '@pages/invoices/_types/Invoice'
  import { useFetch } from '~/hooks/useFetch'
  import type { ApiResponse } from '~/types/ApiResponse'

  const { data: invoices, isLoading } = useFetch<ApiResponse<Invoice[]>>({
    fetchCall: async () => await fetch('/api/invoices').then((resp) => resp.json()),
  })
</script>

<div>
  
  {#if $invoices.data}
    {#each $invoices.data as invoice}
      <li>{invoice.no}</li>
    {/each}
  {/if}
</div>
