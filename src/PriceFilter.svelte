<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function updateFilter (event) {
    dispatch('update', {
      filter: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      name: event.target.id
    })
  }
</script>
<style>
  .heading {
    font-size: 1rem;
  }

  .price-input {
    border: 1px solid var(--light-grey);
    color: var(--dark-grey);
    display: block;
    font-size: 0.875rem;
    margin: 0.625rem 0.625rem 0.625rem 0;
    padding: 0.625rem;
  }

  .price-inline {
    display: inline-block;
  }
</style>

<div class="filter-section mobile-no-border-bottom mobile-border-bottom">
  <h2 class="heading">PRICE</h2>
  <div class="price-inline">
    <label for="min_price">Min Price</label>
    <input class="price-input" type="text" id="min_price" placeholder="ex. $500,000" on:change={updateFilter}>
  </div>
  <div class="price-inline">
    <label for="max_price">Max Price</label>
    <input class="price-input" type="text" id="max_price" placeholder="ex. $1,000,000" on:change={updateFilter}>
  </div>
</div>

<hr>

<div class="filter-section mobile-no-border-bottom mobile-border-bottom">
  <h2 class="heading">REQUIRED DOWN PAYMENT</h2>
  <div class="price-inline">
    <label for="min_down_payment">Min Down Payment %</label>
    <input class="price-input" disabled type="text" id="min_down_payment" placeholder="5" on:change={updateFilter}>
  </div>
  <div class="price-inline">
    <label for="max_down_payment">Max Down Payment %</label>
    <input class="price-input" disabled type="text" id="max_down_payment" placeholder="30" on:change={updateFilter}>
  </div>
  <ul class="left-aligned-list filter-check">
    <li>
      <label for="unknown_down_payment">Include unknown</label>
      <input id="unknown_down_payment" disabled type="checkbox" on:change={updateFilter}>
    </li>
  </ul>
</div>

<hr>

<div class="filter-section no-border-bottom mobile-no-border-bottom">
  <h2 class="heading">TOTAL MONTHLY PAYMENT</h2>
  <div class="price-inline">
    <label for="min_monthly_payment">Min Amount</label>
    <input class="price-input" disabled type="text" id="min_monthly_payment" placeholder="$3,000" on:change={updateFilter}>
  </div>
  <div class="price-inline">
    <label for="max_monthly_payment">Max Amount</label>
    <input class="price-input" disabled type="text" id="max_monthly_payment" placeholder="$10,000" on:change={updateFilter}>
  </div>
  <div class="clearfix"></div>
  <div>
    <div class="price-inline">
      <label for="down_payment">Down Payment %</label>
      <input class="price-input" disabled type="text" id="down_payment" placeholder="20.00" on:change={updateFilter}>
    </div>
    <div class="price-inline">
      <label for="interest_rate">Interest %</label>
      <input class="price-input" disabled type="text" id="interest_rate" placeholder="3.80" on:change={updateFilter}>
    </div>
  </div>
  <div class="clearfix mt-20"></div>
  <h2 class="heading">REQUIRED DOWN PAYMENT</h2>
  <label for="required_max_down_payment">Max Down Payment Amount</label>
  <input class="price-input" type="text" disabled id="required_max_down_payment" placeholder="$100,000" on:change={updateFilter}>
  <div class="clearfix mt-20"></div>
  <h2 class="heading">MONTHLY FEES / CHARGES &amp; TAXES</h2>
  <label for="max_charges">Max Charges (Excluding Mortgage)</label>
  <input class="price-input" type="text" disabled id="max_charges" placeholder="$2,000" on:change={updateFilter}>
</div>