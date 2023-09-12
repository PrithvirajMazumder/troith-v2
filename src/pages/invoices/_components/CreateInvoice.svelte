<script lang="ts">
  import { currentCreateInvoiceStep, resetCreateInvoiceSteps } from '@pages/invoices/_stores/createInvoiceSteps'
  import Icon from '@iconify/svelte'
  import CreateInvoiceFormWrapper from '@pages/invoices/_components/CreateInvoiceFormWrapper.svelte'
  import { resetCreateInvoiceData } from '../_stores/createInvoice'
</script>

<div class="flex items-center border-b gap-4 pr-4">
  <span class="border-r">
    <a
      href="/invoices"
      on:click={() => {
        resetCreateInvoiceData()
        resetCreateInvoiceSteps()
      }}
      class="btn btn-square btn-ghost rounded-none btn-lg"
    >
      <Icon icon="basil:cross-solid" class="text-3xl" />
    </a>
  </span>
  <h1 class="text-md font-medium capitalize">{$currentCreateInvoiceStep.name}</h1>
  <input type="text" placeholder="Search..." class="input input-bordered input-sm ml-auto" />
</div>
<div>
  <CreateInvoiceFormWrapper />
</div>
