<script>
  import BedroomFilter from './BedroomFilter.svelte'
  import Listing from './listing'
  import Modal from './Modal.svelte'
  import MoreFilters from './MoreFilters.svelte'
  import PriceFilter from './PriceFilter.svelte'
  import RegionFilter from './RegionFilter.svelte'
  import { listings } from './listingData'
  import { filteredListings, display } from './listingStore'

  const filters = {}
  let sort = 'has_image,listedDate,desc'
  let open
  let resultCount = 0

  function filterListings () {
    let filteredResults = $listings

    Object.keys(filters).forEach((key) => {
      filteredResults = filteredResults.filter((item) => {
        if (!filters[key].length) {
          return true
        }

        if (typeof filters[key] === 'string') {
          const realKey = key.substring(4)

          if (/^min/.test(key)) {
            return item[key.substring(4)] >= parseFloat(filters[key])
          }

          if (/^max/.test(key)) {
            return item[key.substring(4)] <= parseFloat(filters[key])
          }
        }

        return filters[key].includes(item[key].toString())
      })
    })

    filteredResults = filteredResults.sort((first, second) => {
      const criteria = sort.split(',')
      const decending = criteria[criteria.length -1] === 'desc'
      const boolSort = /^has_/.test(criteria[0])

      if (boolSort) {
        criteria[0] = criteria[0].substring(4)
      }

      if (decending) {
        criteria.pop()
      }

      if (
        (boolSort && second[criteria[0]]) ||
        (first[criteria[0]] < second[criteria[0]] && decending) ||
        (first[criteria[0]] > second[criteria[0]] && !decending)
      )  {
        if (first[criteria[0]] === second[criteria[0]]) {
          return 0
        }

        if (
            criteria.length > 1 &&
            ((first[criteria[0]] === second[criteria[0]]) || (boolSort && first[criteria[0]] && second[criteria[0]]))
          ) {

          if (first[criteria[1]] === second[criteria[1]]) {
            return 0
          }

          return (first[criteria[1]] < second[criteria[1]] && decending) || (first[criteria[1]] > second[criteria[1]] && !decending) ? 1 : -1
        }

        return 1
      }

      return -1

    })


    $filteredListings = filteredResults

    resultCount = $filteredListings.length.toLocaleString()
  }

  function updateFilters (name, value) {
    filters[name] = value

    filterListings()
  }

  filterListings()
</script>

<style>
  .search-menu {
    background-color: var(--white);
    border-bottom: 1px solid var(--light-grey);
    position: fixed;
    top: 3.4375rem;
    width: 100%;
    z-index: 1;
  }

  .justified-list {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem;
    justify-content: space-between;
    margin: 0;
    padding: 0 0.625rem;
  }

  .justified-item {
    align-items: center;
    display: flex;
    height: 3rem;
  }

  .filter {
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/expand.svg);
    background-position: right 1.375rem;
    background-repeat: no-repeat;
    background-size: 0.675rem;
    cursor: pointer;
    padding-right: 1rem;
  }

  .filter-button {
    background-color: transparent;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 1.5rem 1.5rem;
    border: 1px solid var(--light-grey);
    cursor: pointer;
    height: 2.3125rem;
    margin-left: -1px;
    width: 2.5rem;
  }

  .save-filter {
    border: 0;
    color: var(--medium-grey);
    cursor: default;
    font-size: 0.75rem;
    font-weight: bold;
    padding-right: 0.5rem;
    padding: 0.1875rem 0.4375rem 0 0.4375rem;
    width: auto;
  }

  .reset-filter {
    border: 0;
    color: var(--dark-grey);
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.1875rem 0.4375rem 0 0.4375rem;
    width: auto;
  }

  .filter-select {
    height: 2.3125rem;
    margin: 0 0.3125rem 0 0;
  }

  .filter-section {
    border-bottom: 1px solid var(--light-grey);
  }

  .results {
    min-width: 3.125rem;
  }

  .cards-grid {
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/grid-on.svg);
  }

  .cards-list {
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/list-off.svg);
    margin-right: 16px;
  }

  .ui-map {
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/map-off.svg);
  }

  .ui-cards {
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/cards-on.svg);
  }

  .ui-cardsmap {
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/cardsmap-off.svg);
    background-size: 48px 24px;
    width: 60px;
  }

  .search-icon {
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/search.svg);
    border: none;
  }
</style>

<div class="search-menu">
  <ul class="justified-list">
    <li class="justified-item">
      <button class="search-icon filter-button"></button>
    </li>
    <li class="justified-item filter" on:click="{e => open = 'region'}">Neighborhoods</li>
    <li class="justified-item filter" on:click="{e => open = 'price'}">Price</li>
    <li class="justified-item filter" on:click="{e => open = 'bedroom'}">Bedrooms</li>
    <li class="justified-item filter" on:click="{e => open = 'more'}">More Filters</li>
    <li class="justified-item">
      <button class="save-filter filter-button">Save</button>
      <button class="reset-filter filter-button">Clear</button>
    </li>
    <br>
    <li class="justified-item">
      <select class="filter-select" bind:value={sort} on:change={filterListings}>
        <option value="has_image,listedDate,desc">Sort: Default</option>
        <option value="listedDate,desc">Newest</option>
        <option value="price,desc">$ High to Low</option>
        <option value="price">$ Low to High</option>
      </select>
      <select class="filter-select" bind:value={$display}>
        <option value="photos">Photo: Default</option>
        <option value="floorplans">Floorplans</option>
      </select>
      <span class="results">{resultCount} <span> Results</span></span>
    </li>
    <li class="justified-item">
      <button class="cards-grid filter-button"></button>
      <button class="cards-list off filter-button"></button>
      <button class="ui-map off filter-button"></button>
      <button class="ui-cards filter-button"></button>
      <button class="ui-cardsmap off filter-button"></button>
    </li>
  </ul>
</div>
{#if open === 'bedroom'}
  <Modal on:close="{e => open = false}">
    <BedroomFilter on:update="{event => updateFilters(event.detail.name, event.detail.filter)}"/>
  </Modal>
{/if}
{#if open === 'region'}
  <Modal on:close="{e => open = false}">
    <RegionFilter on:update="{event => updateFilters(event.detail.name, event.detail.filter)}"/>
  </Modal>
{/if}
{#if open === 'price'}
  <Modal on:close="{e => open = false}">
    <PriceFilter on:update="{event => updateFilters(event.detail.name, event.detail.filter)}"/>
  </Modal>
{/if}

{#if open === 'more'}
  <Modal on:close="{e => open = false}">
    <MoreFilters on:update="{event => updateFilters(event.detail.name, event.detail.filter)}"/>
  </Modal>
{/if}