<script lang="ts">
  import { currentCreateInvoiceStep, completeCreateInvoiceStep } from '@pages/invoices/_stores/createInvoiceSteps'
  import { selectedItemsForInvoice } from '@pages/invoices/_stores/createInvoice'
</script>

<div>
  {#each $selectedItemsForInvoice as item}
    <div>{item.name}</div>
  {/each}
</div>
