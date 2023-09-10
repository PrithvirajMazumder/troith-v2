<script lang='ts'>
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'

  export let label: string
  export let iconName: string = ''
  export let href: string = '#'

  let location: string = ''

  onMount(() => {
    location = window.location.pathname
  })
</script>

<li class={`${$$props.class} ${location?.startsWith(href) ? 'active' : ''}`}>
  <a {href}
     class='flex items-center text-lg gap-2 group hover:bg-base-100 active:!bg-base-100 active:!text-gray-800 focus:!bg-base-100'>
    {#if !!iconName.length}
      <Icon class='text-2xl group-hover:text-primary-focus' icon={iconName} />
    {/if}
    <span class='capitalize group-hover:pl-1 transition-all duration-300 ease-in-out text-inherit'>{label}</span>
  </a>
</li>

<style>
    .active {
        @apply text-primary-focus pointer-events-none font-medium;
    }

    .active a span {
        @apply pl-1;
    }
</style>
