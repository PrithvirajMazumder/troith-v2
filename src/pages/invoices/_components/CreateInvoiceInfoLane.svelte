<script lang="ts">
  import { currentCreateInvoiceStep, createInvoiceSteps as stepHashMap } from '@pages/invoices/_stores/createInvoiceSteps'
  import type { InvoiceStep } from '@pages/invoices/_types/Step'
  import Steps from '~/components/Stepper.svelte'

  let steps: InvoiceStep[] = []

  $: {
    steps = Object.values($stepHashMap).map((stepData) => stepData)
  }
</script>

<div class="p-4 flex flex-col">
  <Steps
    currentStepNo={$currentCreateInvoiceStep.stepNo}
    {steps}
    vertical
  />
  <div class="divider my-0 -mx-4" />
</div>
