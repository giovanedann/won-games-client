import { GET_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: GET_GAMES,
    variables: { where: { id: ['1', '2'] } }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'Sample Game 1',
          slug: 'sample-game 1',
          short_description: 'sample description 1',
          price: 10.5,
          developers: [{ name: 'sample developer 1' }],
          cover: {
            url: '/sample-game-1.jpg'
          },
          __typename: 'Game'
        },
        {
          id: '2',
          name: 'Sample Game 2',
          slug: 'sample-game 2',
          short_description: 'sample description 2',
          price: 20,
          developers: [{ name: 'sample developer 2' }],
          cover: {
            url: '/sample-game-2.jpg'
          },
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const cartItems = [
  {
    id: '1',
    img: 'http://localhost:1337/sample-game-1.jpg',
    price: '$10.50',
    title: 'Sample Game 1'
  },
  {
    id: '2',
    img: 'http://localhost:1337/sample-game-2.jpg',
    price: '$20.00',
    title: 'Sample Game 2'
  }
]
