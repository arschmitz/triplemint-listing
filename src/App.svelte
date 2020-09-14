<script>
  import Header from "./Header.svelte"
  import SearchBar from "./SearchBar.svelte"
  import ListingCard from "./ListingCard.svelte"
</script>

<style>
  .page-container {
    display: grid;
    grid-template-rows: auto 42px 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-columns: 1fr !important;
    grid-template-areas:
        "menu"
        "navigator"
        "panel";
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    color: #404040;
  }

  .listing-grid {
    display: grid;
    grid-auto-rows: 360px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 10px;
    padding: 10px;
    position: relative;
    outline: none;
    padding-top: 112px;
  }
</style>

<div class="page-container">
  <Header/>
  <SearchBar/>
  <div class="listing-grid">
    <ListingCard/>
  </div>
</div>
