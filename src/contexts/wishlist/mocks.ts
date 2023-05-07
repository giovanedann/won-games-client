import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

// function to mock a game with a fake id
const createGameMock = (id: string) => ({
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

// mock of the wishlist query
export const queryWishlistMock = {
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
      wishlists: [{ id: 1, games: [createGameMock('1'), createGameMock('2')] }]
    }
  }
}

// mock of the create wishlist mutation
export const createWishlistMock = {
  request: {
    query: MUTATION_CREATE_WISHLIST,
    context: { session: { jwt: 'jwt-123' } },
    variables: {
      input: {
        data: {
          games: ['3']
        }
      }
    }
  },
  result: {
    data: {
      createWishlist: {
        wishlist: {
          id: 1,
          games: [createGameMock('3')]
        }
      }
    }
  }
}

// mock of the update wishlist mutation when adding a game
export const updateWishlistMockAddGame = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'jwt-123' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['1', '2', '3'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [createGameMock('1'), createGameMock('2'), createGameMock('3')]
        }
      }
    }
  }
}

// mock of the update wishlist mutation when adding a game
export const updateWishlistMockRemoveGame = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'jwt-123' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['1'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [createGameMock('1')]
        }
      }
    }
  }
}

export const queryWishlistItems = [
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

export const createWishlistItem = [
  {
    id: '3',
    title: 'Game 3',
    slug: 'game-3',
    developer: 'developer-game-3',
    img: 'http://localhost:1337/game-3-cover.jpg',
    price: '$20.00'
  }
]

export const updateWishlistItems = [
  ...queryWishlistItems,
  ...createWishlistItem
]
