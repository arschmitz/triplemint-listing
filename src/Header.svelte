<style type="text/css">
	.header {
    position: fixed;
    align-items: center;
    background: var(--white);
    border-bottom: 1px solid var(--light-grey);
    display: grid;
    font-size: 0.875rem;
    grid-template-columns: 12.5rem auto auto 0;
    grid-template-rows: 3.25rem 0.125rem;
    width: 100%;
    z-index: 1;
	}

	.logo {
    cursor: pointer;
    height: 2.125rem;
    justify-self: center;
    margin-top: 0.4375rem;
    padding-left: 0.625rem;
	}

  .logo-image {
    width: 8.75rem;
  }

	.location {
    grid-area: menuItems;
    display: inline-flex;
    margin-right: 1.25rem;
    margin-top: 0.875rem;
	}

  .location-select {
    color: var(--dark-grey);
    font-size: 0.875rem;
    padding: 0.375rem 2rem 0.375rem 0.375rem;
  }

  .menu {
    display: none;
  }

  .menu-item {
    height: 2.4375rem;
    line-height: 1.875rem;
    margin: 0.875rem 0.9375rem 0 0;
  }

  .secondary-menu {
    justify-self: right;
    display: none;
  }

  .phone {
    display: none;
    height: 2.4375rem;
    line-height: 1.875rem;
    margin-top: 0.875rem;
  }

  .phone-link {
    padding: 0.625rem;
  }

  .login-state {
    display: inline-block;
  }

  .login-button {
    background-color: var(--white);
    border: 1px solid var(--green);
    color: var(--dark-grey);
    cursor: not-allowed;
    font-size: 0.875rem;
    line-height: 0.875rem;
    margin-right: 1.25rem;
    padding: 0.375rem 2.25rem;
  }

  @media screen and (min-width: 61rem) {
    .menu {
      display: inline-flex;
    }

    .phone {
      display: inline-block;
    }
  }

  @media screen and (min-width: 34rem) {
    .secondary-menu {
      display: inline-block;
    }
  }
</style>
<header class="header">
	<a class="logo" href="https://triplemint.com">
		<img class="logo-image" src="https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/triplemint.svg" alt="logo">
	</a>
	<div class="menu-wrap">
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
