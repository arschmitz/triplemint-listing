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
  .wrapper {
    border-bottom: 1px solid #d4d4d4;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
  }

  .tab {
    height: 50px;
    padding: 0 20px;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 50px;
    color: #acacac;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #d4d4d4;
    display: inline-block;
    cursor: pointer;
    margin-right: -1px;
    margin-top: -1px;
  }

  .region-list {
    column-count: 3;
    column-gap: 10px;
  }

  .active-tab {
    color: #fff;
    background-color: #00d7a0;
    border-color: #fff;
    border-top-color: #d4d4d4;
    border-bottom-color: #d4d4d4;
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