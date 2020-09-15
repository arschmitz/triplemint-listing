<script>
  import Header from "./Header.svelte"
  import SearchBar from "./SearchBar.svelte"
  import ListingGrid from "./ListingGrid.svelte"
</script>

<style>
  .page-container {
    color: var(--dark-grey);
    display: grid;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-columns: 1fr !important;
    grid-template-rows: auto 2.625rem 1fr;
  }
</style>

<div class="page-container">
  <Header/>
  <SearchBar/>
  <ListingGrid/>
</div>
