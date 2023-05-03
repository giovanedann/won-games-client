import { GameCardProps } from 'components/GameCard'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'
import wishlistGamesAdapter from './wishlist-games.adapter'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'

const apiGame: QueryWishlist_wishlists_games = {
  __typename: 'Game',
  id: '213',
  cover: {
    __typename: 'UploadFile',
    url: '/cover_url'
  },
  developers: [{ __typename: 'Developer', name: 'Rockstar Games' }],
  name: 'Free Game',
  price: 300,
  slug: 'free-game'
}

describe('FreeGamesAdapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult: GameCardProps = {
      id: '213',
      developer: 'Rockstar Games',
      img: getImageUrl('/cover_url'),
      price: formatPrice(300),
      slug: 'free-game',
      title: 'Free Game'
    }

    expect(wishlistGamesAdapter([apiGame])).toStrictEqual([expectedResult])
  })
})
