<script lang="ts">
  import { currentCreateInvoiceStep } from '@pages/invoices/_stores/createInvoiceSteps'
  import SelectParty from '@pages/invoices/_components/SelectParty.svelte'
  import SelectItems from '@pages/invoices/_components/SelectItems.svelte'
  import SelectTax from '@pages/invoices/_components/SelectTax.svelte'
  import SelectBank from '@pages/invoices/_components/SelectBank.svelte'
  import CreateInvoiceItems from '@pages/invoices/_components/CreateInvoiceItems.svelte'
</script>

<div>
  {#if $currentCreateInvoiceStep.name === 'select a party'}
    <SelectParty />
  {:else if $currentCreateInvoiceStep.name === 'choose items'}
    <SelectItems />
  {:else if $currentCreateInvoiceStep.name === 'configure items'}
    <CreateInvoiceItems />
  {:else if $currentCreateInvoiceStep.name === 'choose tax scheme'}
    <SelectTax />
  {:else if $currentCreateInvoiceStep.name === 'select bank account'}
    <SelectBank />
  {/if}
</div>
