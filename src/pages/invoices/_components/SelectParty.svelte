<script lang="ts">
  import PartyCard from '~/components/PartyCard.svelte'
  import { useFetch } from '~/hooks/useFetch'
  import type { ApiResponse } from '~/types/ApiResponse'
  import type { Party } from '~/types/Party'
  import { selectPartyForInvoice } from '../_stores/createInvoice'
  import { completeCreateInvoiceStep, currentCreateInvoiceStep } from '../_stores/createInvoiceSteps'

  const { data: partiesData, isLoading } = useFetch<ApiResponse<Party[]>>({
    fetchCall: async () => await fetch('/api/parties').then((resp) => resp.json()),
  })
</script>

<div class="relative">
  {#if $isLoading}
    <progress class="progress progress-primary rounded-none w-full absolute top-0 left-0" />
  {/if}
  {#if $partiesData.data}
    {#each $partiesData.data as party}
      <PartyCard
        {party}
        onClick={(party) => {
          console.log(party);
          selectPartyForInvoice(party)
          completeCreateInvoiceStep($currentCreateInvoiceStep.stepNo)
        }}
      />
    {/each}
  {/if}
</div>
