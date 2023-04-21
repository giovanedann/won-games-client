import { QueryHome_newGames } from 'graphql/generated/QueryHome'
import { GameCardProps } from 'components/GameCard'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'
import newGamesAdapter from './new-games.adapter'

const apiGame: QueryHome_newGames = {
  __typename: 'Game',
  id: '123',
  cover: {
    __typename: 'UploadFile',
    url: '/cover_url'
  },
  developers: [{ __typename: 'Developer', name: 'Rockstar Games' }],
  name: 'New Game',
  price: 300,
  slug: 'new-game'
}

describe('NewGamesAdapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult: GameCardProps = {
      id: '123',
      developer: 'Rockstar Games',
      img: getImageUrl('/cover_url'),
      price: formatPrice(300),
      slug: 'new-game',
      title: 'New Game'
    }

    expect(newGamesAdapter([apiGame])).toStrictEqual([expectedResult])
  })
})
