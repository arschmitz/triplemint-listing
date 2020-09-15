<script>
  import RegionList from './RegionList.svelte'
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const activeRegions = []
  let regions = []
  let activeRegionIndex = 2

  async function fetchRegions () {
    regions = await fetch(`https://www.triplemint.com/tmapi/options/region?fev=a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1`)
    .then(r => r.json())
  }

  function updateFilter (data) {
    if (activeRegions.indexOf(data.detail.id) > -1) {
      activeRegions.splice(activeRegions.indexOf(data.detail.id), 1)
    } else {
      activeRegions.push(data.detail.id)
    }

    dispatch('update', {
      filter: activeRegions.join(','),
      name: 'region'
    })
  }

  fetchRegions()
</script>

<style>
  .tabs {
    display: flex;
    flex-wrap: wrap;
  }

  .tab {
    border: 1px solid var(--light-grey);
    color: var(--medium-grey);
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 3.125rem;
    margin: -1px -1px 0 0;
    padding: 0 1.25rem;
  }

  .region-list {
    column-count: 3;
    column-gap: 0.625rem;
  }

  .active-tab {
    background-color: var(--green);
    color: var(--white);
  }
</style>

<div class="neighborhood-filter">
  <ul class="tabs">
    {#each regions as region, index}
      {#if region.address_parts.length > 1}
        <li class="tab{activeRegionIndex === index ? ' active-tab' : ''}" on:click="{e => activeRegionIndex = index}">{region.address_parts[0]}</li>
      {/if}
    {/each}
  </ul>

  <div class="region-list">
    {#if regions.length}
      <RegionList regions={regions[activeRegionIndex].children} on:message={updateFilter}/>
    {/if}
  </div>
</div>