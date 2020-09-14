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
      filter: bedrooms.join(','),
      name: 'bedrooms'
    })

    bedrooms = bedrooms
  }

</script>

<style>
  .filter-title {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0 10px 0;
    display: block;
  }

  .filter-bedroom {
    display: flex;
    flex-wrap: wrap;
  }

  .filter-bedroom-item {
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

  .filter-active {
    color: #fff;
    background-color: #00d7a0;
    border-color: #fff;
    border-top-color: #d4d4d4;
    border-bottom-color: #d4d4d4;
  }
</style>

<h2 class="filter-title">BEDROOMS</h2>
<ul class="filter-bedroom">
  <li class="filter-bedroom-item{bedrooms.indexOf('0') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('0')}">
    <span>Studio</span>
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('1') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('1')}">
    <span>1</span>
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('2') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('2')}">
    <span>2</span>
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('3') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('3')}">
    <span>3</span>
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('4') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('4')}">
    <span>4</span>
  </li>
  <li class="filter-bedroom-item{bedrooms.indexOf('*5') > -1 ? ' filter-active' : ''}" on:click="{e => updateBedrooms('*5')}">
    <span>5+</span>
  </li>
</ul>