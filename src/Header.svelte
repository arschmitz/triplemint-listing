<style>
	.header {
		position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    text-align: left;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    display: grid;
    grid-template-columns: 200px auto auto 0;
    grid-template-rows: 52px 2px;
    grid-template-areas:
        "logo menuItems secondaryMenu hamburger"
        "progress progress progress progress";
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
	}

  .header > * {
    vertical-align: middle;
    display: inline-block;
  }

  .header-container {
    display: grid;
    grid-template-columns: auto 420px;
    grid-template-rows: auto 42px 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-areas:
        "menu menu"
        "panel navigator"
        "panel map";
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    color: #404040;
    overflow: hidden;
  }

	.logo {
		grid-area: logo;
    justify-self: center;
    height: 34px;
    margin-top: 7px;
    padding-left: 10px;
    cursor: pointer;
	}

  .logo-image {
    width: 140px;
  }

	.location {
		grid-area: menuItems;
    display: inline-flex;
    margin-right: 20px;
    margin-top: 14px;
	}

  .location-select {
    color: #404040;
    font-size: 14px;
    padding: 3px 32px 3px 5px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .menu {
    grid-area: menuItems;
    list-style-type: none;
    padding: 0;
    height: 55px;
    margin: 0;
    display: inline-flex;
  }

  .menu-item {
    height: 39px;
    margin: 14px 15px 0 0;
    display: inline-block;
    line-height: 30px;
    vertical-align: middle;
    border-bottom: 3px solid transparent;
    transition: border-bottom-color .3s;
    overflow: hidden;
  }

  .secondary-menu {
    grid-area: secondaryMenu;
    justify-self: right;
    width: auto;
    vertical-align: middle;
  }

  .phone {
    height: 39px;
    margin-top: 14px;
    display: inline-block;
    line-height: 30px;
    vertical-align: middle;
  }

  .phone-link {
    padding: 10px;
  }

  .login-state {
    width: auto;
    height: 100%;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    margin-top: 3px;
  }

  .login-button {
    margin-right: 20px;
    padding: 6px 36px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 14px;
    border: none;
    cursor: pointer;
    color: #404040;
    background-color: #fff;
    border: 1px solid #00d7a0;
    line-height: 14px;
    color: #404040;
    cursor: not-allowed;
  }
</style>

<div class="header-container">
  <header class="header">
  	<a class="logo" href="https://triplemint.com">
  		<img class="logo-image" src="https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/triplemint.svg" alt="logo">
  	</a>
  	<div>
  		<div class="location">
  			<select class="location-select">
  				<option value="ny:nyc">New York City, NY</option>
  				<option value="nj:hudson">Hudson County, NJ</option>
  			</select>
  		</div>
  		<ul class="menu">
  			<li class="menu-item">
  				<a href="https://triplemint.com/listings?listing_type=sale">Buy</a>
  			</li>
  			<li class="menu-item">
  				<a href="https://triplemint.com/sell">Sell</a>
  			</li>
  			<li class="menu-item">
  				<a href="https://triplemint.com/listings?listing_type=rental">Rent</a>
  			</li>
  			<li class="menu-item">
  				<a href="https://triplemint.com/agents">Agents</a>
  			</li>
  			<li class="menu-item">
  				<a href="https://triplemint.com/press">Press</a>
  			</li>
  			<li class="menu-item">
  				<a href="https://triplemint.com/how-it-works">How It Works</a>
  			</li>
  		</ul>
  	</div>
    <div class="secondary-menu">
      <div class="phone">
        <a class="phone-link" href="tel:2122351123">212-235-1123</a>
      </div>
      <div class="login-state">
        <button class="login-button" disabled>
          Sign in
        </button>
      </div>
    </div>
  </header>
</div>
