<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
  import { selectItemsForInvoice, selectedPartyForInvoice } from '@pages/invoices/_stores/createInvoice'
  import { differenceBy } from 'lodash'
  import ItemCard from '~/components/ItemCard.svelte'
  import { useFetch } from '~/hooks/useFetch'
  import type { ApiResponse } from '~/types/ApiResponse'
  import type { Item } from '~/types/Item'
  import { getTotalPrice } from '../_uitls/price'
  import { completeCreateInvoiceStep, currentCreateInvoiceStep } from '../_stores/createInvoiceSteps'

  const { data: itemsResp, isLoading } = useFetch<ApiResponse<Item[]>>({
    fetchCall: async () => await fetch('/api/items').then((resp) => resp.json()),
  })
  let partyItems: Item[] = $selectedPartyForInvoice.items.map((item) => ({ ...item }))
  let items: Item[] = []
  let selectedItems: { [key: string]: Item } = {}

  const handleItemSelection = (item: Item) => {
    if (selectedItems[item.id]) {
      delete selectedItems[item.id]
      selectedItems = { ...selectedItems }
      return
    }

    selectedItems[item.id] = item
    selectedItems = { ...selectedItems }
  }

  $: {
    items = $itemsResp?.data ? differenceBy($itemsResp.data, partyItems, 'id') : []
  }
</script>

<div class="h-[calc(100svh-8.1rem)] relative">
  <div class="h-full w-full overflow-y-scroll">
    <Accordion checked class="bg-primary bg-opacity-[0.03] -mb-[10px]">
      <div slot="title" class="w-full flex items-center">
        <h3 class="!text-[1rem] text-primary-focus">{$selectedPartyForInvoice.name} (preferred items)</h3>
        {#if !!partyItems.filter((partyItem) => selectedItems[partyItem.id]).length}
          <h3 class="!text-[1rem] text-primary-focus !text-xs ml-auto">{partyItems.filter((item) => selectedItems[item.id]).length} (selected)</h3>
        {/if}
      </div>
      <div slot="content" class="border-violet-200 border-t">
        {#each partyItems as partyItem}
          {@const isSelected = !!selectedItems[partyItem.id]}
          <ItemCard
            on:click={() => {
              handleItemSelection(partyItem)
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
    {#each items as item}
      {@const isSelected = !!selectedItems[item.id]}
      <ItemCard
        class="hover:bg-base-200"
        on:click={() => {
          handleItemSelection(item)
        }}
        {item}
        {isSelected}
      />
    {/each}
  </div>
  <div
    class={`absolute items-start bottom-0 left-0 h-max w-full flex gap-4 px-4 pb-4 overflow-hidden bg-base-100 backdrop-blur-xl bg-opacity-70 ${
      !!Object.keys(selectedItems).length ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <span
      class={`flex-1 flex items-center flex-wrap duration-500 bg-primary-content ease-in-out min-h-[3.5rem] h-max rounded-xl px-6 translate-y-32 opacity-0 ${
        !!Object.keys(selectedItems).length ? '!translate-y-0 !opacity-100' : ''
      }`}
    >
      <span>
        <p class="text-sm">Selected:</p>
        <p class="text-md font-semibold text-primary">{Object.keys(selectedItems).length} Items</p>
      </span>
      <span class="divider divider-horizontal" />
      <span>
        <p class="text-sm">Estimated price:</p>
        <p class="text-md font-semibold text-primary">
          {getTotalPrice(Object.values(selectedItems)).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
          })}
        </p>
      </span>
    </span>
    <button
      class={`btn btn-primary capitalize min-h-[3.5rem] duration-700 ease-in-out rounded-xl translate-y-32 opacity-0 ${
        !!Object.keys(selectedItems).length ? '!translate-y-0 !opacity-100' : ''
      }`}
      on:click|preventDefault={() => {
        selectItemsForInvoice(Object.values(selectedItems))
        completeCreateInvoiceStep($currentCreateInvoiceStep.stepNo)
      }}
    >
      Continue
    </button>
  </div>
</div>
