import { parseQueryStringToFilter, parseQueryStringToWhereJson } from '.'

const filterItems = [
  { name: 'price_lte', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price_lte: 100,
  platforms: ['windows', 'linux'],
  developers: 'Rockstar Games',
  sort: 'price:asc'
}

describe('parseQueryStringToWhereJson', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToWhereJson({
      queryString,
      filterItems
    })

    expect(parsedQuery).toStrictEqual({
      price_lte: queryString.price_lte,
      platforms: { name_contains: queryString.platforms },
      developers: { name_contains: queryString.developers }
    })
  })
})

describe('parseQueryStringToFilter', () => {
  it('should parse queryString to filter values format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price_lte: 100,
      platforms: ['windows', 'linux'],
      developers: ['Rockstar Games'],
      sort: 'price:asc'
    })
  })
})
