<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  const bedrooms = []

  function updateBedrooms (count) {
    if (bedrooms.indexOf(count) > -1) {
      bedrooms.splice(bedrooms.indexOf(count), 1)
    } else {
      bedrooms.push(count)
    }

    dispatch('update', {
      filter: bedrooms,
      name: 'bedrooms'
    })

    bedrooms = bedrooms
  }
</script>

<style>
  .filter-title {
    display: block;
    font-size: 1rem;
    padding: 0 0 0.625rem 0;
  }

  .filter-bedroom {
    display: flex;
    flex-wrap: wrap;
  }

  .filter-bedroom-item {
    border: 1px solid var(--light-grey);
    color: var(--medium-grey);
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 3.25rem;
    margin: -1px -1px 0 0;
    padding: 0 1.25rem;
  }

  .filter-active {
    background-color: var(--off-white);
    color: var(--white);
  }
</style>

<h2 class="filter-title">BEDROOMS</h2>
<ul class="filter-bedroom">
  <li class="filter-bedroom-item{bedrooms.indexOf('0') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('0')}">
    Studio
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('1') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('1')}">
    1
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('2') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('2')}">
    2
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('3') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('3')}">
    3
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('4') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('4')}">
    4
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('*5') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('*5')}">
    5+
  </li>
</ul>