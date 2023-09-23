<script lang="ts">
  export let shouldDisplayArrow: boolean = true
  export let checked: boolean = false
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div>
  <div class={`collapse ${shouldDisplayArrow && 'collapse-arrow'} bg-base-100 rounded-none ${$$props.class}`}>
    <input type="radio" {checked} />
    <div class="collapse-title text-xl font-medium z-50 select-none" on:click|preventDefault={() => (checked = !checked)}>
      <slot name="title" />
    </div>
    <div class="collapse-content z-40 p-0 !pb-0">
      <slot name="content" />
    </div>
  </div>
</div>
