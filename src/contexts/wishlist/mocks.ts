import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const gamesMock = (id: string) => ({
  id,
  name: `Game ${id}`,
  slug: `game-${id}`,
  price: 20,
  developers: [{ name: `developer-game-${id}` }],
  cover: {
    url: `/game-${id}-cover.jpg`
  },
  __typename: 'Game'
})

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: {
      session: {
        jwt: 'jwt-123'
      }
    },
    variables: {
      identifier: 'valid@mail.com'
    }
  },
  result: {
    data: {
      wishlists: [{ id: 1, games: [gamesMock('1'), gamesMock('2')] }]
    }
  }
}

export const wishlistItems = [
  {
    id: '1',
    title: 'Game 1',
    slug: 'game-1',
    developer: 'developer-game-1',
    img: 'http://localhost:1337/game-1-cover.jpg',
    price: '$20.00'
  },
  {
    id: '2',
    title: 'Game 2',
    slug: 'game-2',
    developer: 'developer-game-2',
    img: 'http://localhost:1337/game-2-cover.jpg',
    price: '$20.00'
  }
]
