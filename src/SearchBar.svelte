<style>
  .search-menu {
    grid-area: menu;
    font-size: 14px;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
    position: fixed;
    top: 55px;
    width: 100%;
  }

  .justified-list {
    margin: 0;
    padding: 0 10px;
    font-size: 14px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .big {
    display: none;
  }

  .justified-item {
    display: flex;
    align-items: center;
    height: 48px;
    margin: 0;
  }

  .filter {
    padding-right: 16px;
    background-color: transparent;
    background-size: 10px;
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/expand.svg);
    background-repeat: no-repeat;
    background-position: right 22px;
    cursor: pointer;
  }

  .filter-button {
    width: 40px;
    height: 37px;
    margin-left: -1px;
    border: 1px solid #d8d8d8;
    background-color: transparent;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
  }

  .save-filter {
    padding-right: 8px;
    color: #767676;
    cursor: default;
    font-size: 12px;
    border: 0;
    width: auto;
    padding: 3px 7px 0 7px;
    font-weight: bold;
  }

  .reset-filter {
    color: #404040;
    font-size: 12px;
    border: 0;
    width: auto;
    padding: 3px 7px 0 7px;
    font-weight: bold;
  }

  .filter-select {
    height: 37px;
    margin: 0 5px 0 0;
    padding: 0 30px 0 10px;
    font-size: 14px;
    color: #404040;
  }

  .results {
    min-width: 50px;
    font-family: 'Open Sans', sans-serif;
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
    width: 60px;
    background-size: 48px 24px;
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/cardsmap-off.svg);
  }

  .search-icon {
    border: none;
    background-image: url(https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/search.svg);
    background-size: 24px;
  }

  @media screen and (min-width: 1100px) {
    .big {
        display: flex;
    }
  }
</style>

<div class="search-menu">
  <ul class="justified-list big">
    <li class="justified-item">
      <button class="search-icon filter-button"></button>
    </li>
    <li class="justified-item filter">Neighborhoods</li>
    <li class="justified-item filter">Price</li>
    <li class="justified-item filter">Bedrooms</li>
    <li class="justified-item filter">More Filters</li>
    <li class="justified-item">
      <button class="save-filter filter-button">Save</button>
      <button class="reset-filter filter-button">Clear</button>
    </li>
    <li class="justified-item">
      <select class="filter-select">
        <option value="has_photo,listing_listed_date,desc">Sort: Default</option>
        <option value="listing_listed_date,desc">Newest</option>
        <option value="last_updated_on,desc">Last Updated</option>
        <option value="listing_price,desc">$ High to Low</option>
        <option value="listing_price">$ Low to High</option>
      </select>
      <select class="filter-select">
        <option value="photos">Photo: Default</option>
        <option value="floorplans">Floorplans</option>
      </select>
      <span class="results">13,183 <span> Results</span></span>
    </li>
    <li class="justified-item">
      <button class="cards-grid filter-button"></button>
      <button class="cards-list off filter-button"></button>
      <button class="ui-map off filter-button"></button>
      <button class="ui-cards filter-button"></button>
      <button class="ui-cardsmap off filter-button"></button>
    </li>
  </ul>
  <!--<ul class="justified-list filters medium">
    <li>
      <button class="search-icon"></button>
    </li>
    <li class="filter">Neighborhoods</li>
    <li class="filter">Price</li>
    <li class="filter">Bedrooms</li>
    <li class="filter">More Filters</li>
    <li>
      <button class="save-filter">Save</button>
      <button class="reset-filter">Clear</button>
    </li>
  </ul>
  <ul class="justified-list filters small">
    <li>
      <button class="search-icon"></button>
      <button class="neighborhoods-filter"></button>
      <button class="beds-filter"></button>
      <button class="more-filters"></button>
      <button class="prices-filter"></button>
    </li>
    <li>
      <button class="save-filter">Save</button>
      <button class="reset-filter">Clear</button>
    </li>
  </ul>
  <ul class="justified-list filters medium small">
    <li>
      <div class="dropdown-menu order-menu">
        <button class="order-menu"></button>
        <div class="menu-options" style="display: none;">
          <ul data-bind="foreach: options">
            <li>
              <div class="text">Default</div>
            </li>
            <li>
              <div class="text">Newest</div>
            </li>
            <li>
              <div class="text">Last Updated</div>
            </li>
            <li>
              <div class="text">$ High to Low</div>
            </li>
            <li>
              <div class="text">$ Low to High</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown-menu image-menu">
        <button class="floorplans-menu"></button>
        <div class="menu-options" style="display: none;">
          <ul>
            <li>
              <div class="text">Default Photo</div>
            </li>
            <li>
              <div class="text">Floorplans</div>
            </li>
          </ul>
        </div>
      </div>
      <select class="order">
        <option value="has_photo,listing_listed_date,desc">Sort: Default</option>
        <option value="listing_listed_date,desc">Newest</option>
        <option value="last_updated_on,desc">Last Updated</option>
        <option value="listing_price,desc">$ High to Low</option>
        <option value="listing_price">$ Low to High</option>
      </select>
      <select class="floorplans">
        <option value="photos">Photo: Default</option>
        <option value="floorplans">Floorplans</option>
      </select>
      <span class="results">2,077<span> Results</span></span>
    </li>
    <li class="cardsandmap notonlymap">
      <span class="results map-view" style="display: none;">2,077<span> Results</span></span>
      <button class="cards-grid"></button>
      <button class="cards-list off"></button>
      <button class="ui-map off"></button>
      <button class="ui-cards"></button>
      <button class="ui-cardsmap off"></button>
    </li>
    <li class="cardsormap">
      <span class="results map-view" style="display: none;">2,077<span> Results</span></span>
      <button class="cards-grid"></button>
      <button class="cards-list off"></button>
      <button class="ui-map off"></button>
    </li>
  </ul>
  <ul class="justified-list filters sticky">
    <li class="sticky-item">
      <button class="search-icon"></button>
      <button class="neighborhoods-filter"></button>
      <button class="more-filters"></button>
      <div class="dropdown-menu order-menu">
        <button class="order-menu"></button>
        <div class="menu-options" style="display: none;">
          <ul>
            <li>
              <div class="text">Default</div>
            </li>
            <li>
              <div class="text">Newest</div>
            </li>
            <li>
              <div class="text">Last Updated</div>
            </li>
            <li>
              <div class="text">$ High to Low</div>
            </li>
            <li>
              <div class="text">$ Low to High</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown-menu image-menu">
        <button class="floorplans-menu"></button>
        <div class="menu-options" style="display: none;">
          <ul>
            <li>
              <div class="text">Default Photo</div>
            </li>
            <li>
              <div class="text">Floorplans</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown-menu ui-menu">
        <button style="display: none;">
          <ul>
            <li>
              <div class="icon grid-view"></div>
              <div class="text">grid view</div>
            </li>
            <li>
              <div class="icon list-view"></div>
              <div class="text">list view</div>
            </li>
            <li>
              <div class="icon map-view"></div>
              <div class="text">map view</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown-menu save-clear-menu">
        <button class="save-clear-menu"></button>
        <div class="menu-options" style="display: none;">
          <ul>
            <li class="disabled">
              <div class="text">Save</div>
            </li>
            <li>
              <div class="text">Clear</div>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li class="sticky-item">
      <div class="sessionInfo">
        <button class="dark">
          <a href="/tmapi/login">Sign in</a>
        </button>
      </div>
      <div class="hamburger"></div>
    </li>
  </ul>
  <ul id="tag-list-component" class="left-aligned-list tags"></ul>-->
</div>