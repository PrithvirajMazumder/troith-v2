<script lang="ts">
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'

  export let href = '#'
  export let iconName: string

  let location: string = ''

  onMount(() => {
    location = window.location.pathname
  })
</script>

<a {href} class={`text-primary ${location?.startsWith(href) && 'active'}`}>
  <Icon class="text-2xl text-gray-900" icon={iconName} />
</a>
