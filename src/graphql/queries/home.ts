import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
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
  }
`
