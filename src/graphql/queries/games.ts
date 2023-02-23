import { gql } from '@apollo/client'

export const GET_GAMES = gql`
  query getGames {
    games {
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`
