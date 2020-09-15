<script>
  import BedroomFilter from './BedroomFilter.svelte'
  import Listing from './listing'
  import Modal from './Modal.svelte'
  import MoreFilters from './MoreFilters.svelte'
  import PriceFilter from './PriceFilter.svelte'
  import RegionFilter from './RegionFilter.svelte'
  import { listings } from './listingStore'
  import { display } from './displayStore'

  const queryBase = "https://www.triplemint.com/tmapi/service/prisma/listings"
  let sort = 'has_photo,listing_listed_date,desc'
  let open
  let resultCount = 0

  const filters = {
    building_types_operator: 'include',
    fev: 'a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1',
    listing_type: 'SALE',
    locality: 'ny:nyc',
    status: 'active',
    time_share: 'false'
  }

  async function fetchListings () {
    let filterString = ''

    Object.keys(filters).forEach((key) => {
      if (!filters[key]) {
        return
      }
      filterString += `&${key}=${filters[key]}`
    })
    const results = await fetch(`${queryBase}?order=${sort}&ui=card&limit=18&skip=0${filterString}`)
    .then(r => r.json())

    $listings = results.models.map((model) => new Listing(model))

    const count = await fetch(`${queryBase}/count?order=${sort}${filterString}`)
    .then(r => r.json())

    resultCount = count.count.toLocaleString()
  }

  function updateFilters (name, value) {
    filters[name] = value

    fetchListings()
  }

  fetchListings()
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
      <select class="filter-select" bind:value={sort} on:blur={fetchListings}>
        <option value="has_photo,listing_listed_date,desc">Sort: Default</option>
        <option value="listing_listed_date,desc">Newest</option>
        <option value="last_updated_on,desc">Last Updated</option>
        <option value="listing_price,desc">$ High to Low</option>
        <option value="listing_price">$ Low to High</option>
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