<script lang="ts">
  import type { Invoice } from '@pages/invoices/_types/Invoice'
  import EntityCard from '~/components/EntityCard.svelte'
  import { useFetch } from '~/hooks/useFetch'
  import type { ApiResponse } from '~/types/ApiResponse'

  const { data: invoices, isLoading } = useFetch<ApiResponse<Invoice[]>>({
    fetchCall: async () => await fetch('/api/invoices').then((resp) => resp.json()),
  })
</script>

<div class="p-4 relative">
  {#if $isLoading}
    <progress class="progress progress-primary rounded-none w-full mt-0 -my-4 absolute left-0 top-0" />
  {/if}
  <div>
    {#if $invoices.data}
      {#each $invoices.data as invoice}
        <EntityCard>{invoice.no}</EntityCard>
      {/each}
    {/if}
  </div>
</div>
