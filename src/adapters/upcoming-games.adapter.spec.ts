import { QueryHome_upcomingGames } from 'graphql/generated/QueryHome'
import { GameCardProps } from 'components/GameCard'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'
import newGamesAdapter from './new-games.adapter'

const apiGame: QueryHome_upcomingGames = {
  __typename: 'Game',
  cover: {
    __typename: 'UploadFile',
    url: '/cover_url'
  },
  developers: [{ __typename: 'Developer', name: 'Rockstar Games' }],
  name: 'Upcoming Game',
  price: 300,
  slug: 'upcoming-game'
}

describe('UpcomingGamesAdapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult: GameCardProps = {
      developer: 'Rockstar Games',
      img: getImageUrl('/cover_url'),
      price: formatPrice(300),
      slug: 'upcoming-game',
      title: 'Upcoming Game'
    }

    expect(newGamesAdapter([apiGame])).toStrictEqual([expectedResult])
  })
})
