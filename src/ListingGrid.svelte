<script>
  import ListingCard from "./ListingCard.svelte"
  import { listings } from './listingStore.js'
</script>

<style>
  .listing-grid {
    display: grid;
    grid-auto-rows: 22.5rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 0.625rem;
    padding: 0.625rem;
    padding-top: 7rem;
  }
</style>


<div class="listing-grid">
  {#each $listings as listing}
      <ListingCard bind:listing={listing}/>
  {/each}
</div>
