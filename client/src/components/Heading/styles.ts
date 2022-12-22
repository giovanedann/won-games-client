import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
