<script lang="ts">
  import { currentCreateInvoiceStep, completeCreateInvoiceStep } from '@pages/invoices/_stores/createInvoiceSteps'
</script>

<div>
  <h1 class="text-2xl">{$currentCreateInvoiceStep.name}</h1>
  <button
    class="btn btn-primary"
    on:click|preventDefault={() => {
      completeCreateInvoiceStep($currentCreateInvoiceStep.stepNo + 1)
    }}>Next</button
  >
</div>
