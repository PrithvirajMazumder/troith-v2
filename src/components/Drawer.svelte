<script lang='ts'>
  import DrawerMenu from '@components/DrawerMenu.svelte'

  export let drawerId: string
</script>

<div class='drawer lg:drawer-open'>
  <input id={drawerId} type='checkbox' class='drawer-toggle' />
  <div class='drawer-content border-r'>
    <slot />
  </div>
  <div class='drawer-side'>
    <label for={drawerId} class='drawer-overlay'></label>
    <div class='menu p-4 w-80 min-h-full bg-base-100 text-base-content border-r'>
      <div class='mb-4'>
        <a href='/' class='btn btn-ghost no-animation normal-case text-2xl text-primary'>Troith</a>
      </div>
      <DrawerMenu href='/invoices' iconName='solar:documents-line-duotone' label='invoices' />
      <DrawerMenu href='/challans' iconName='solar:clipboard-check-line-duotone' label='challans' />
      <DrawerMenu href='/quotations' iconName='solar:clipboard-text-line-duotone' label='quotations' />
      <DrawerMenu href='/items' iconName='solar:box-line-duotone' label='items' />
      <DrawerMenu href='/parties' iconName='solar:emoji-funny-circle-line-duotone' label='parties' />
      <DrawerMenu href='/taxation' iconName='solar:calculator-minimalistic-line-duotone' label='taxation' />
      <DrawerMenu class='mt-auto' href='/profile' iconName='solar:confounded-circle-line-duotone' label='profile' />
      <DrawerMenu href='/profile' iconName='solar:power-line-duotone' label='logout' />
    </div>
  </div>
</div>

