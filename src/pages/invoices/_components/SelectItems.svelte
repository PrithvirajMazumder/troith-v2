<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
  import { selectedPartyForInvoice } from '@pages/invoices/_stores/createInvoice'
  import { differenceBy } from 'lodash'
  import ItemCard from '~/components/ItemCard.svelte'
  import { useFetch } from '~/hooks/useFetch'
  import type { ApiResponse } from '~/types/ApiResponse'
  import type { Item } from '~/types/Item'

  type SelectedInvoiceItem = Item & { isSelected?: boolean }
  const { data: itemsResp, isLoading } = useFetch<ApiResponse<SelectedInvoiceItem[]>>({
    fetchCall: async () => await fetch('/api/items').then((resp) => resp.json()),
  })
  let partyItems: SelectedInvoiceItem[] = $selectedPartyForInvoice.items.map((item) => ({ ...item }))
  let items: SelectedInvoiceItem[] = []

  $: {
    items = $itemsResp?.data ? differenceBy($itemsResp.data, partyItems, 'id') : []
  }
</script>

<div class="h-[calc(100svh-8.1rem)] overflow-y-scroll">
  <Accordion checked class="bg-primary bg-opacity-[0.03] -mb-[10px]">
    <div slot="title" class="w-full flex items-center">
      <h3 class="!text-[1rem] text-primary-focus">{$selectedPartyForInvoice.name} (preferred items)</h3>
      {#if !!partyItems.filter((partyItem) => partyItem.isSelected).length}
        <h3 class="!text-[1rem] text-primary-focus !text-xs ml-auto">{partyItems.filter((item) => item.isSelected).length} (selected)</h3>
      {/if}
    </div>
    <div slot="content" class="border-violet-200 border-t">
      {#each partyItems as partyItem, index}
        {@const isSelected = partyItem.isSelected}
        <ItemCard
          on:click={() => {
            partyItems[index].isSelected = !isSelected
          }}
          class="text-primary border-violet-200"
          item={partyItem}
          {isSelected}
        />
      {/each}
    </div>
  </Accordion>
  {#if $isLoading}
    <progress class="progress progress-primary w-full my-0 rounded-none" />
  {/if}
  {#if !$isLoading}
    <h1 class="text-2xl mb-4 mt-8 ml-4">All Items</h1>
  {/if}
  {#each items as item, index}
    {@const isSelected = item.isSelected}
    <ItemCard
      class="hover:bg-base-200"
      on:click={() => {
        items[index].isSelected = !isSelected
      }}
      {item}
      {isSelected}
    />
  {/each}
</div>