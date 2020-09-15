import '@testing-library/jest-dom/extend-expect'
import SearchBar from './SearchBar.svelte'
import { filteredListings } from './listingStore'
import { get } from 'svelte/store'
import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/svelte'

const modals = ['Neighborhoods', 'Price', 'More Filters', 'Bedrooms']

modals.forEach((modal) => {
  test(`Show and hide ${modal} menu`, async () => {
    const { container, getByText } = render(SearchBar)
    const neighborhoods = getByText(modal)

    await fireEvent.click(neighborhoods)

    expect(container.querySelectorAll('.modal')).toHaveLength(1)

    const close = container.querySelector('.close-modal')

    await fireEvent.click(close)

    expect(container.querySelectorAll('.modal')).toHaveLength(0)
  })
})

test(`Clicking a second menu swaps menus`, async () => {
  const { container, getByText } = render(SearchBar)
  const neighborhoods = getByText('Neighborhoods')
  const price = getByText('Price')

  await fireEvent.click(neighborhoods)

  expect(container.querySelectorAll('.neighborhood-filter')).toHaveLength(1)
  expect(container.querySelectorAll('.modal')).toHaveLength(1)

  await fireEvent.click(price)

  expect(container.querySelectorAll('.neighborhood-filter')).toHaveLength(0)
  expect(getByText('PRICE')).toBeTruthy()
  expect(container.querySelectorAll('.modal')).toHaveLength(1)
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