import Container from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const GamesSection = styled.div``

export const ShowMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
`

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacings.medium};

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const Loader = styled.img`
  width: 4rem;
`
