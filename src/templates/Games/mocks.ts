import { GET_GAMES } from 'graphql/queries/games'

export const gamesMock = [
  {
    request: { query: GET_GAMES, variables: { limit: 15 } },
    result: {
      data: {
        games: [
          {
            name: 'Mocked game',
            slug: 'mocked-game',
            cover: { url: '/uploads/mocked-img-url.jpg' },
            developers: [{ name: 'Mocked developer' }],
            price: 65.99,
            __typename: 'Game'
          }
        ]
      }
    }
  }
]

export const loadMoreGamesMock = [
  gamesMock[0],
  {
    request: { query: GET_GAMES, variables: { limit: 15, start: 1 } },
    result: {
      data: {
        games: [
          {
            name: 'Load more game',
            slug: 'load-more-game',
            cover: { url: '/uploads/load-more-games-img-url.jpg' },
            developers: [{ name: 'Mocked load more' }],
            price: 30,
            __typename: 'Game'
          }
        ]
      }
    }
  }
]
