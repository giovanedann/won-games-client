import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLink
    buttonLabel
    alignment
  }
`
