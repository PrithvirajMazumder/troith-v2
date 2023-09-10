<script lang="ts">
  import Icon from '@iconify/svelte'
  import type { Invoice } from '@pages/invoices/_types/Invoice'
  import { format, parseISO } from 'date-fns'
  import { getTotalPrice } from '@pages/invoices/_uitls/price'

  export let invoice: Invoice
  export let onClick: (invoice: Invoice) => void = () => {}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="border-b p-4 relative group hover:bg-base-200 cursor-pointer duration-300 ease-in-out"
  on:click|preventDefault={() => {
    onClick(invoice)
  }}
>
  <div class="absolute bg-primary w-16 h-2 top-0 shadow-xl rounded-b-lg group-hover:h-5 duration-300 ease-in-out" />
  <h1 class="text-2xl mt-4 font-medium">{invoice.party.name}</h1>
  <div class="flex items-center mt-4 font-bold">
    <p class="text-sm italic flex items-center gap-1">
      <Icon icon="solar:hashtag-circle-line-duotone" class="text-xl" />
      {invoice.no}
    </p>
    <div class="divider divider-horizontal mx-2" />
    <p class="text-sm italic flex items-center gap-1">
      <Icon icon="solar:calendar-line-duotone" class="text-xl" />
      {format(parseISO(`${invoice.date}`), 'dd/MM/yyyy')}
    </p>
    <div class="divider divider-horizontal mx-2" />
    <p class="text-sm italic flex items-center gap-1">
      <Icon icon="solar:box-outline" class="text-xl" />
      {invoice.items.length}
    </p>
    <div class="divider divider-horizontal mx-2" />
    <p class="text-sm italic flex items-center gap-1">
      <span class="text-lg"> ₹ </span>
      {getTotalPrice(invoice.items).toLocaleString()}
    </p>
  </div>
  <Icon
    icon="solar:arrow-right-line-duotone"
    class="text-2xl absolute top-1/2 -translate-y-1/2 right-5 group-hover:right-4 duration-300 ease-in-out"
  />
</div>
