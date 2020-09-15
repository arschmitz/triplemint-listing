<script>
  import { display } from './listingStore'
  export let listing

  function currency (amount) {
    return Number((amount).toFixed(1)).toLocaleString()
  }
</script>

<style type="text/css">
  @font-face {
    font-family: 'ConduitMdITCTTMedium';
    src: url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.eot');
    src: url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.eot?#iefix') format('embedded-opentype'), url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.woff2') format('woff2'), url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.woff') format('woff'), url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.ttf') format('truetype')
  }

  .card-link {
    position: relative;
  }

  .listing-card {
    border: 1px solid var(--light-grey);
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .data {
    font-family: 'ConduitMdITCTTMedium',sans-serif;
    padding: 0.625rem 1.875rem 0.625rem 0.625rem;
    text-transform: uppercase;
  }

  .price {
    line-height: 1.25rem;
  }

  .summary {
    color: var(--medium-grey);
    font-size: 0.875rem;
    line-height: 0.875rem;
  }

  .address {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  .neighborhood {
    color: var(--medium-grey);
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  .favorites {
    align-items: center;
    bottom: 0;
    cursor: pointer;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    position: absolute;
    right: 0;
    width: 2.5rem;
  }

  .favorite {
    height: .9375rem;
  }

  .thumbnail {
    height: 70%;
    width: 120%;
  }

  .image {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }


</style>

<div class="listing-card">
  {#if listing.image}
    <div class="thumbnail">
      {#if (listing.image && $display === 'photos') || !listing.floorplan }
        <img class="image" src={listing.image} alt="">
      {:else}
        <img class="image" src={listing.floorplan} alt="floorplan">
      {/if}

    </div>
  {/if}
  <div class="grid-bottom"></div>
  <div class="data">
    <div class="location">
      <p class="address">{listing.address}</p>
      <p class="neighborhood">{listing.neighborhood}</p>
    </div>
    <div class="list-info">
      <p class="price" >${currency(listing.price)}</p>
      <p class="summary">
        {listing.bedrooms} BD, {listing.bathrooms} BA,
        {#if listing.squareFeet}
          {listing.squareFeet} SF,
        {/if}
        {listing.type}
      </p>
    </div>
  </div>
  <div class="favorites" >
    <img class="favorite" alt="heart" src="https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/favorite.svg">
  </div>
</div>
