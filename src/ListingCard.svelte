<script>
  export let listing
</script>

<style>
  @font-face {
    font-family: 'ConduitMdITCTTMedium';
    src: url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.eot');
    src: url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.eot?#iefix') format('embedded-opentype'), url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.woff2') format('woff2'), url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.woff') format('woff'), url('https://static.triplemint.com/jupiter/88bc34243902da1a5457faa0804504956c832271/static/fonts/333DC2_3_0.ttf') format('truetype')
  }

  .card-link {
    position: relative;
  }

  .listing-card {
    display: inline-block;
    height: 100%;
    border: 1px solid #d8d8d8;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .data {
    height: 30%;
    padding: 10px 30px 10px 10px;
    font-family: 'ConduitMdITCTTMedium',sans-serif;
    text-transform: uppercase;
  }

  .price {
    line-height: 20px;
  }

  .summary {
    font-size: 14px;
    line-height: 14px;
    color: #767676;
  }

  .address {
    font-size: 20px;
    line-height: 20px;
  }

  .neighborhood {
    font-size: 14px;
    line-height: 18px;
    color: #767676;
  }

  .favorites {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .favorite {
    height: 15px;
  }

  .thumbnail {
    width: 405px;
    height: 70%;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


</style>

<div class="listing-card">
  {#if listing.image}
    <div class="thumbnail">
      <img class="image" src={listing.image}>
    </div>
  {/if}
  <div class="grid-bottom"></div>
  <div class="data">
    <div class="location">
      <p class="address">{listing.address}</p>
      <p class="neighborhood">{listing.neighborhood}</p>
    </div>
    <div class="list-info">
      <p class="price" >${listing.price}</p>
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
    <img class="favorite" src="https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/favorite.svg"></div>
    <div class="selection grid">
      <input class="listing-collection" type="checkbox" value="" style="display: none;">
  </div>
</div>
