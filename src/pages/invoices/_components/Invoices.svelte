<script lang="ts">
  import type { Invoice } from '@pages/invoices/_types/Invoice'
  import { useFetch } from '~/hooks/useFetch'
  import type { ApiResponse } from '~/types/ApiResponse'
  import InvoiceCard from '@pages/invoices/_components/InvoiceCard.svelte'
  import Icon from '@iconify/svelte'

  const { data: invoices, isLoading } = useFetch<ApiResponse<Invoice[]>>({
    fetchCall: async () => await fetch('/api/invoices').then((resp) => resp.json()),
  })
</script>

<div class="w-full px-4 py-6 border-b flex items-center gap-4">
  <label class="input-group flex-1">
    <span class="!rounded-l-full">
      <Icon icon="iconamoon:search-duotone" class="text-xl" />
    </span>
    <input type="text" placeholder="Search by party name, invioce number" class="input input-bordered !rounded-r-full !w-full" />
  </label>
  <button class="btn btn-primary rounded-full capitalize"> 
    <Icon icon="solar:add-circle-outline" class="text-2xl"/>
    Create
   </button>
</div>
<div class="relative">
  {#if $isLoading}
    <progress class="progress progress-primary rounded-none w-full absolute top-0 left-0" />
  {/if}
  {#if $invoices.data}
    {#each $invoices.data as invoice}
      <InvoiceCard {invoice} />
    {/each}
  {/if}
</div>
