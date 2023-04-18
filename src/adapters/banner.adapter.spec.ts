import { QueryHome_banners } from 'graphql/generated/QueryHome'
import bannerAdapter from './banners.adapter'
import {
  ENUM_COMPONENTPAGERIBBON_COLOR,
  ENUM_COMPONENTPAGERIBBON_SIZE
} from 'graphql/generated/globalTypes'
import { BannerProps } from 'components/Banner'

const apiBanner: QueryHome_banners = {
  __typename: 'Banner',
  button: {
    __typename: 'ComponentPageButton',
    label: 'label',
    link: 'link'
  },
  image: {
    __typename: 'UploadFile',
    url: 'url'
  },
  ribbon: {
    __typename: 'ComponentPageRibbon',
    color: ENUM_COMPONENTPAGERIBBON_COLOR.primary,
    id: 'id',
    size: ENUM_COMPONENTPAGERIBBON_SIZE.normal,
    text: 'ribbon text'
  },
  subtitle: 'subtitle',
  title: 'title'
}

describe('BannerAdapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult: BannerProps = {
      buttonLabel: 'label',
      buttonLink: 'link',
      img: 'url',
      subtitle: 'subtitle',
      title: 'title',
      ribbon: 'ribbon text',
      ribbonColor: 'primary',
      ribbonSize: 'normal'
    }

    expect(bannerAdapter([apiBanner])).toStrictEqual([expectedResult])
  })
})
