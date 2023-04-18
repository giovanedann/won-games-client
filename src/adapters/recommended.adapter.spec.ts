import { GameCardProps } from 'components/GameCard'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'
import { QueryRecommended_recommended_section_games } from 'graphql/generated/QueryRecommended'
import { recommendedGamesAdapter } from './recommended.adapter'

const apiGame: QueryRecommended_recommended_section_games = {
  __typename: 'Game',
  cover: {
    __typename: 'UploadFile',
    url: '/cover_url'
  },
  developers: [{ __typename: 'Developer', name: 'Rockstar Games' }],
  name: 'New Game',
  price: 300,
  slug: 'new-game'
}

describe('RecommendedGamesAdapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult: GameCardProps = {
      developer: 'Rockstar Games',
      img: getImageUrl('/cover_url'),
      price: formatPrice(300),
      slug: 'new-game',
      title: 'New Game'
    }

    expect(recommendedGamesAdapter([apiGame])).toStrictEqual([expectedResult])
  })
})
