<script lang="ts">
  import Icon from '@iconify/svelte'
  import type { Party } from '~/types/Party'
  import { getInitial } from '~/utils/string'

  export let party: Party
  export let onClick: (party: Party) => void = (party) => {}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="border-b bg-opacity-[0.03] group p-4 relative group hover:bg-base-200 cursor-pointer duration-300 ease-in-out"
  on:click|preventDefault={() => {
    onClick(party)
  }}
>
  <div class="flex items-end gap-6">
    <span
      class="w-24 h-24 bg-base-200 rounded-full group-hover:bg-base-300 duration-300 flex justify-center items-center text-3xl font-bold group-hover:shadow-primary group-hover:shadow-[0_0_0_2px]"
    >
      {getInitial(party.name)}
    </span>
    <span>
      <h1 class="text-2xl mt-4 font-medium">{party.name}</h1>
      <h1 class="text-md mt-2">{party.address}</h1>
      <h1 class="text-md mt-2">{party.city}: {party.pin}</h1>
    </span>
  </div>
  <div class="flex items-center mt-6 font-bold">
    <p class="text-sm italic flex items-center gap-1">
      <Icon icon="solar:call-chat-bold-duotone" class="text-xl" />
      {party.phone}
    </p>
    <div class="divider divider-horizontal mx-2" />
    <p class="text-sm italic flex items-center gap-1">
      <Icon icon="solar:letter-bold-duotone" class="text-xl" />
      {party.email}
    </p>
    <div class="divider divider-horizontal mx-2" />
    <p class="text-sm italic flex items-center gap-1">
      <Icon icon="solar:sledgehammer-bold-duotone" class="text-xl" />
      {party.gstin}
    </p>
  </div>
  <div
    class="text-sm absolute top-1/2 -translate-y-1/2 right-5 duration-200 ease-in-out flex items-center gap-2 opacity-0 group-hover:-rotate-2 group-hover:opacity-100 delay-100"
  >
    <Icon icon="fluent:cursor-click-20-filled" />
    Click to select
  </div>
</div>
