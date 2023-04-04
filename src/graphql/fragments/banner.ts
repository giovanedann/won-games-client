import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    title
    subtitle

    image {
      url
    }

    ribbon {
      id
      text
      color
      size
    }
  }
`
