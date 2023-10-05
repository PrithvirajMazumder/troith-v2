<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Item } from '~/types/Item'
  export let invoice: Item

  let dispatch = createEventDispatcher<{ click: { quantity: number; amount: number } }>()
</script>

<div>
  {invoice.name}
</div>
