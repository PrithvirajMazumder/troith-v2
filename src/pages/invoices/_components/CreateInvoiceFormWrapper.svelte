<script lang="ts">
  import { currentCreateInvoiceStep } from '@pages/invoices/_stores/createInvoiceSteps'
  import SelectParty from '@pages/invoices/_components/SelectParty.svelte'
  import SelectItems from '@pages/invoices/_components/SelectItems.svelte'
  import SelectTax from '@pages/invoices/_components/SelectTax.svelte'
  import SelectBank from '@pages/invoices/_components/SelectBank.svelte'
</script>

<div>
  {#if $currentCreateInvoiceStep.name === 'Select a party'}
    <SelectParty />
  {:else if $currentCreateInvoiceStep.name === 'Choose items'}
    <SelectItems />
  {:else if $currentCreateInvoiceStep.name === 'Choose tax scheme'}
    <SelectTax />
  {:else if $currentCreateInvoiceStep.name === 'Select bank account'}
    <SelectBank />
  {/if}
</div>
