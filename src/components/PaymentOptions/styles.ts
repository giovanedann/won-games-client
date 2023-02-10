import { tint } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
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
    gap: 1rem;
    align-items: center;
    flex-direction: column;

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
`

export const CardImageBox = styled.div`
  margin-right: ${({ theme }) => theme.spacings.xxsmall};
  position: relative;
  width: 3.8rem;
  height: 2.4rem;
`

const commonStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.gray[100]};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const CardItem = styled.div`
  ${({ theme }) => css`
    ${commonStyles(theme)};

    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const RadioLabel = styled.label`
  cursor: pointer;
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${commonStyles(theme)};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`
