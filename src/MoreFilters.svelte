<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function updateFilter (event) {
    dispatch('update', {
      filter: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      name: event.target.id
    })
  }

  const years = []

  years.length = new Date().getFullYear() - 1899
</script>

<style>
  .heading {
    font-size: 16px;
    font-weight: 700;
    padding: 0 0 10px 0;
    display: block;
  }

  .inline-select {
    display: inline-block;
  }
</style>

<h2 class="heading">BATHROOMS</h2>
<select id="min_bathrooms" on:change={updateFilter}>
  <option value="0">Any Baths</option>
  <option value="1">1 or more</option>
  <option value="1.5">1.5 or more</option>
  <option value="2">2  or more</option>
  <option value="2.5">2.5 or more</option>
  <option value="3">3 or more</option>
  <option value="3.5">3.5 or more</option>
  <option value="4">4 or more</option>
  <option value="4.5">4.5 or more</option>
</select>

<hr>

<h2 class="heading">SQUARE FEET</h2>
<select id="min_surface" on:change={updateFilter}>
  <option value="">Any</option>
  <option value="300">300+</option>
  <option value="400">400+</option>
  <option value="500">500+</option>
  <option value="600">600+</option>
  <option value="700">700+</option>
  <option value="800">800+</option>
  <option value="900">900+</option>
  <option value="1000">1000+</option>
  <option value="1250">1250+</option>
  <option value="1500">1500+</option>
  <option value="2000">2000+</option>
  <option value="2500">2500+</option>
  <option value="3000">3000+</option>
  <option value="3500">3500+</option>
  <option value="4000">4000+</option>
  <option value="5000">5000+</option>
</select>

<label for="unknown_surface">Include unknown</label>
<input id="unknown_surface" type="checkbox" on:change={updateFilter}>

<hr>

<h2 class="heading">YEAR BUILT</h2>
<select class="inline-select" id="max_year" on:change={updateFilter}>
  <option value=""></option>
	<option value="1600">Before 1900</option>
	{#each years as year, index}
    <option value={1900 + index}>{1900 + index}+</option>
  {/each}
</select>
to
<select class="inline-select" id="min_year" on:change={updateFilter}>
  <option value=""></option>
  <option value="1600">Before 1900</option>
  {#each years as year, index}
    <option value={2020 - index}>{2020 - index}</option>
  {/each}
  <option value="1600">Before 1900</option>
</select>

<hr>

<h2 class="heading">DAYS ON MARKET</h2>

<div class="inline-select">
  <label for="min_days">Min Days</label>
  <select id="min_days" on:change={updateFilter}>
    <option value=""></option>
  	<option value="0">Just Listed</option>
  	<option value="1">1</option>
  	<option value="2">2</option>
  	<option value="3">3</option>
  	<option value="4">4</option>
  	<option value="5">5</option>
  	<option value="6">6</option>
  	<option value="7">7</option>
  	<option value="8">8</option>
  	<option value="9">9</option>
  	<option value="10">10</option>
  	<option value="20">20</option>
  	<option value="30">30</option>
  	<option value="40">40</option>
  	<option value="50">50</option>
  	<option value="60">60</option>
  	<option value="70">70</option>
  	<option value="80">80</option>
  	<option value="90">90</option>
  	<option value="100">100</option>
  	<option value="120">120</option>
  	<option value="150">150</option>
  	<option value="180">180</option>
  	<option value="200">200</option>
  	<option value="300">300</option>
  </select>
</div>

<div class="inline-select">
  <label for="max_days">Max Days</label>
  <select id="max_days" on:change={updateFilter}>
    <option value=""></option>
    <option value="0">Just Listed</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="60">60</option>
    <option value="70">70</option>
    <option value="80">80</option>
    <option value="90">90</option>
    <option value="100">100</option>
    <option value="120">120</option>
    <option value="150">150</option>
    <option value="180">180</option>
    <option value="200">200</option>
    <option value="300">300</option>
  </select>
</div>