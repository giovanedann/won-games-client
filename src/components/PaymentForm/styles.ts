import { tint } from 'polished'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.form``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.gray[100])};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;
    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
    padding-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
  `}
`

export const FreeGamesInfo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
