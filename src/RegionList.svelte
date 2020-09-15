<script>
  import { createEventDispatcher } from 'svelte';

  export let regions

  const dispatch = createEventDispatcher();

  function dispatchClick(text) {
    dispatch('message', {
      text
    })
  }
</script>

<style>
  .top-level-region {
    font-weight: 700;
  }

  .list {
    margin-top: 0;
  }

  .sub-list {
    padding-left: 1rem;
  }
</style>

{#each regions as region}
  <ul class="list {region.region_type === 'neighbourhood' ? 'sub-list' : ''}">
    <li>
      <label class="{region.region_type !== 'neighbourhood' ? 'top-level-region' : ''}"><input type="checkbox" value={region.text} on:change="{e => dispatchClick(region.text)}"> {region.address_parts[0]}</label>

      {#if region.children.length}
        <svelte:self regions={region.children} on:message/>
      {/if}
    </li>
  </ul>
{/each}