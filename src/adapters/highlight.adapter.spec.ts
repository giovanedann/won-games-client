import { HighlightProps } from 'components/Highlight'
import { QueryHome_sections_newGames_highlight } from 'graphql/generated/QueryHome'
import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from 'graphql/generated/globalTypes'
import highlightAdapter from './highlight.adapter'
import getImageUrl from 'utils/getImageUrl'

const apiHighlight: QueryHome_sections_newGames_highlight = {
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
}

describe('BannerAdapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult: HighlightProps = {
      buttonLabel: 'button label',
      buttonLink: 'button link',
      subtitle: 'highlight subtitle',
      title: 'highlight title',
      backgroundImage: getImageUrl('/highlight_background_url'),
      floatImage: getImageUrl('/highlight_float_image_url'),
      alignment: 'left'
    }

    expect(highlightAdapter(apiHighlight)).toStrictEqual(expectedResult)
  })
})
