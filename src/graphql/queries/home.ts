import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query QueryHome {
    banners {
      title
      subtitle

      button {
        label
        link
      }

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
  }
`
