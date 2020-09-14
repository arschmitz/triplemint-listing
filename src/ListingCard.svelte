<script>
  export let listing

  const baseUrl = `https://dyn-images.triplemint.com/production/images/unit/${listing.unit.id}/x486/`

  function currency(amount) {
    return Number((amount).toFixed(1)).toLocaleString()
  }

  function listingImage(index) {
    return `${baseUrl}${listing.unit.dyn_images[index].key}.${listing.unit.dyn_images[index].extension}`
  }

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

<a class="card-link"
href="/listing/1028112-E-79th-St-7-B-Lenox-Hill-Manhattan-NY-10075" data-id="1028112" title="156 E 79th St #7-B">
  <div class="listing-card"
title="156 E 79th St #7-B" data-id="1028112">
    {#if listing.unit.dyn_images.length}
      <div class="thumbnail">
        <img class="image" src="https://dyn-images.triplemint.com/production/images/unit/{listing.unit.id}/x486/{listing.unit.dyn_images[0].key}.{listing.unit.dyn_images[0].extension}">
      </div>
    {/if}
    <div class="grid-bottom"></div>
    <div class="data">
      <div class="location">
        <p class="address">{listing.address}</p>
        <p class="neighborhood">{listing.unit.building.region.address_parts[0]}, {listing.unit.building.region.address_parts[1]}</p>
      </div>
      <div class="list-info">
        <p class="price" >${currency(listing.price)}</p>
        <p class="summary">
          {listing.unit.bedrooms} BD, {listing.unit.bathrooms} BA,
          {#if listing.unit.surface}
            {listing.unit.surface.toLocaleString()} SF,
          {/if}
          {listing.unit.building.type}
        </p>
      </div>
    </div>
  </div>
  <div class="favorites" >
    <img class="favorite" src="https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/favorite.svg"></div>
    <div class="selection grid">
      <input class="listing-collection" type="checkbox" value="" style="display: none;">
  </div>
</a>