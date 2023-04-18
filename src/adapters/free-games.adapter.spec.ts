import { QueryHome_freeGames } from 'graphql/generated/QueryHome'
import freeGamesAdapter from './free-games.adapter'
import { GameCardProps } from 'components/GameCard'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

const apiGame: QueryHome_freeGames = {
  __typename: 'Game',
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
      developer: 'Rockstar Games',
      img: getImageUrl('/cover_url'),
      price: formatPrice(300),
      slug: 'free-game',
      title: 'Free Game'
    }

    expect(freeGamesAdapter([apiGame])).toStrictEqual([expectedResult])
  })
})
