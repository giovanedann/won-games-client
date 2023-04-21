import { QueryHome_sections } from 'graphql/generated/QueryHome'
import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from 'graphql/generated/globalTypes'
import sectionsAdapter, { SectionsAdapterResult } from './sections.adapter'
import getImageUrl from 'utils/getImageUrl'
import formatPrice from 'utils/formatPrice'

const apiSections: Partial<QueryHome_sections> = {
  __typename: 'Home',
  popularGames: {
    __typename: 'ComponentPagePopularGames',
    title: 'Popular Games',
    highlight: {
      __typename: 'ComponentPageHighlight',
      alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT.left,
      background: {
        __typename: 'UploadFile',
        url: '/highlight_background_url'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      floatImage: {
        __typename: 'UploadFile',
        url: '/highlight_float_image_url'
      },
      subtitle: 'highlight subtitle',
      title: 'highlight title'
    },
    games: [
      {
        __typename: 'Game',
        id: '123',
        cover: { __typename: 'UploadFile', url: '/popular-game-1' },
        developers: [{ __typename: 'Developer', name: 'Santa Monica Studios' }],
        name: 'Popular game 1',
        price: 300,
        slug: 'popular-game-1'
      }
    ]
  }
}

describe('BannerAdapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult: SectionsAdapterResult = {
      mostPopularGames: [
        {
          id: '123',
          developer: 'Santa Monica Studios',
          img: getImageUrl('/popular-game-1'),
          price: formatPrice(300),
          slug: 'popular-game-1',
          title: 'Popular game 1'
        }
      ]
    }

    expect(sectionsAdapter(apiSections as QueryHome_sections)).toStrictEqual(
      expectedResult
    )
  })
})
