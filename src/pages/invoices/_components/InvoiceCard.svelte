<script lang="ts">
  import Icon from '@iconify/svelte'
  import type { Invoice } from '@pages/invoices/_types/Invoice'
  import { format, parseISO } from 'date-fns'
  import { getTotalPrice } from '@pages/invoices/_uitls/price'
  import type { InvoiceStatuses } from '../_types/Status'
  import { map } from 'lodash'

  export let invoice: Invoice
  export let onClick: (invoice: Invoice) => void = () => {}

  const getInvoiceStatusColorName = (status: InvoiceStatuses): string => {
    switch (status) {
      case 'draft':
        return 'warning'
      case 'confirmed':
        return 'success'
      case 'ready':
        return 'primary'
      default:
        return 'neutral'
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={`border-b bg-${getInvoiceStatusColorName(
    invoice.status.name
  )} bg-opacity-[0.03] p-4 relative group hover:bg-opacity-10 cursor-pointer duration-300 ease-in-out`}
  on:click|preventDefault={() => {
    onClick(invoice)
  }}
>
  <div
    class={`absolute bg-${getInvoiceStatusColorName(
      invoice.status.name
    )} w-16 h-2 top-0 shadow-xl rounded-b-lg group-hover:h-5 duration-300 ease-in-out`}
  />
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
      {getTotalPrice(
        invoice.items.map(({ item: { quantity, price } }) => ({
          price,
          quantity,
        }))
      ).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}
    </p>
  </div>
  <Icon
    icon="solar:arrow-right-line-duotone"
    class="text-2xl absolute top-1/2 -translate-y-1/2 right-5 group-hover:right-4 duration-300 ease-in-out"
  />
</div>
