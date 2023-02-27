import { gql } from '@apollo/client'

export const GET_GAMES = gql`
  query getGames($limit: Int!) {
    games(limit: $limit) {
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
