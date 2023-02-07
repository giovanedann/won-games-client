import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    height: 0.1rem;
    background: ${theme.colors.divider};
    border: 0;

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.xxlarge} * 2.5) auto ${theme.spacings.xxlarge};
    `}
  `}
`

export default Divider
