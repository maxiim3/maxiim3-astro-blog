<script lang="ts">
  let isToggled = $state(false);
</script>

<button onclick={() => (isToggled = !isToggled)}>click to reveal</button>
{#if isToggled}
  <p>Hello from Svelte 🔥</p>
{/if}
