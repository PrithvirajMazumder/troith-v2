<script lang="ts">
  import type { Step } from '~/types/Step'

  export let vertical: boolean = false
  export let steps: Step[]
  export let currentStepNo: number
</script>

<ul class={`steps ${vertical && 'steps-vertical'}`}>
  {#each steps as step}
    <li
      class={`step capitalize font-semibold ${currentStepNo === step.stepNo && '!font-extrabold'} ${
        step.isCurrent || step.isCompleted ? 'step-primary' : ''
      }`}
    >
      {step.name}
    </li>
  {/each}
</ul>
