import styled, { css } from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.gray};

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;
      
      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.gray};
      }
    `}
  `}
`

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transitions.normal};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}
  `}
`
