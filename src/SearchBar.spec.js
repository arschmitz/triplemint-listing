import '@testing-library/jest-dom/extend-expect'
import SearchBar from './SearchBar.svelte'
import { filteredListings } from './listingStore'
import { get } from 'svelte/store'
import { fireEvent, render } from '@testing-library/svelte'

const modals = [
  { text: 'Neighborhoods', class: 'region' },
  { text: 'Price', class: 'price' },
  { text: 'More Filters', class: 'more' },
  { text: 'Bedrooms', class: 'bedroom' }
]

modals.forEach((modal) => {
  test(`Show and hide ${modal.class} menu`, async () => {
    const { container, getByText } = render(SearchBar)
    const menu = getByText(modal.text)

    await fireEvent.click(menu)

    expect(container.querySelector(`.${modal.class}-modal`)).toBeVisible()

    const close = container.querySelector('.close-modal')

    await fireEvent.click(close)

    expect(container.querySelector(`.${modal.class}-modal`)).not.toBeVisible()
  })
})

test('Clicking a second menu swaps menus', async () => {
  const { container, getByText } = render(SearchBar)
  const neighborhoods = getByText('Neighborhoods')
  const price = getByText('Price')

  await fireEvent.click(neighborhoods)

  expect(container.querySelector('.neighborhood-filter')).toBeVisible()
  expect(container.querySelector('.region-modal')).toBeVisible()

  await fireEvent.click(price)

  expect(container.querySelector('.neighborhood-filter')).not.toBeVisible()
  expect(getByText('PRICE')).toBeTruthy()
  expect(container.querySelector('.price-modal')).toBeVisible()
})

test('Clicking a bedroom button updates results', async () => {
  const { container, getByText } = render(SearchBar)
  const bedrooms = getByText('Bedrooms')

  await fireEvent.click(bedrooms)

  const studio = getByText('Studio')
  await fireEvent.click(studio)

  expect(studio).toHaveClass('filter-active')
  expect(container.querySelector('.results')).toHaveTextContent('43 Results')
  expect(get(filteredListings)).toHaveLength(43)

  // Remove the filter
  await fireEvent.click(studio)

  expect(studio).not.toHaveClass('filter-active')
  expect(container.querySelector('.results')).toHaveTextContent('400 Results')
  expect(get(filteredListings)).toHaveLength(400)
})

test('Filters maintain state after closing and reopening', async () => {
  const { container, getByText } = render(SearchBar)
  const bedrooms = getByText('Bedrooms')

  await fireEvent.click(bedrooms)

  const studio = getByText('Studio')
  await fireEvent.click(studio)

  expect(studio).toHaveClass('filter-active')
  expect(container.querySelector('.results')).toHaveTextContent('43 Results')
  expect(get(filteredListings)).toHaveLength(43)

  const close = container.querySelector('.close-modal')

  await fireEvent.click(close)

  await fireEvent.click(bedrooms)
  expect(studio).toHaveClass('filter-active')
})

test('Selecting neighborhoods updates results', async () => {
  const { container, getByText, getByLabelText } = render(SearchBar)
  const neighborhoods = getByText('Neighborhoods')

  await fireEvent.click(neighborhoods)

  const chelsea = getByLabelText('Chelsea')
  await fireEvent.click(chelsea)

  expect(chelsea).toBeChecked()
  expect(container.querySelector('.results')).toHaveTextContent('11 Results')
  expect(get(filteredListings)).toHaveLength(11)

  const battery = getByLabelText('Battery Park City')
  await fireEvent.click(battery)

  expect(chelsea).toBeChecked()
  expect(battery).toBeChecked()
  expect(container.querySelector('.results')).toHaveTextContent('14 Results')
  expect(get(filteredListings)).toHaveLength(14)

  await fireEvent.click(battery)

  expect(chelsea).toBeChecked()
  expect(battery).not.toBeChecked()
  expect(container.querySelector('.results')).toHaveTextContent('11 Results')
  expect(get(filteredListings)).toHaveLength(11)

  await fireEvent.click(chelsea)

  expect(chelsea).not.toBeChecked()
  expect(battery).not.toBeChecked()
  expect(container.querySelector('.results')).toHaveTextContent('400 Results')
  expect(get(filteredListings)).toHaveLength(400)
})
