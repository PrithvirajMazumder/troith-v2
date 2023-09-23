<script lang="ts">
  import Icon from '@iconify/svelte'
  import { createEventDispatcher } from 'svelte'
  import type { Item } from '~/types/Item'
  import { getInitial } from '~/utils/string'

  export let item: Item
  export let isSelected: boolean = false

  const dispatch = createEventDispatcher<{ click: Item }>()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={`border-b bg-opacity-[0.03] group p-4 relative group cursor-pointer duration-300 ease-in-out ${$$props.class}`}
  on:click|preventDefault={() => {
    dispatch('click', item)
  }}
>
  <div class="flex items-center gap-6">
    <span
      class:shadow-[0_0_0_2px]={isSelected}
      class:shadow-primary={isSelected}
      class="w-16 h-16 bg-base-200 rounded-2xl capitalize group-hover:bg-base-300 duration-300 flex justify-center items-center text-3xl font-bold group-hover:shadow-primary group-hover:shadow-[0_0_0_2px]"
    >
      {getInitial(item.name)}
    </span>
    <div>
      <h1 class="text-xl font-medium capitalize">{item.name}</h1>
      <h1 class="text-sm mt-1">HSN: {item.hsn}</h1>
    </div>
  </div>
  <div
    class:opacity-100={isSelected}
    class="badge badge-primary capitalize py-3 px-2 absolute right-4 top-1/2 -translate-y-1/2 opacity-0 duration-200 ease-in-out"
  >
    Selected
    <Icon icon="solar:check-circle-broken" class="text-lg ml-2" />
  </div>
</div>
