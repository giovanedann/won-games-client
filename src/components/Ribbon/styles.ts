import { darken } from 'polished'
import styled, { css } from 'styled-components'

import { RibbonProps, RibbonColors } from '.'

const wrapperVariants = {
  color: (color: RibbonColors) => css`
    background-color: ${({ theme }) => theme.colors[color]};

    &::before {
      border-left-color: ${({ theme }) => darken(0.2, theme.colors[color])};
      border-top-color: ${({ theme }) => darken(0.2, theme.colors[color])};
    }
  `,

  normal: css`
    font-size: ${({ theme }) => theme.font.sizes.small};
    height: 3.6rem;
    padding: 0 ${({ theme }) => theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: css`
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    padding: 0 ${({ theme }) => theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

type WrapperProps = Omit<RibbonProps, 'children'>

export const Wrapper = styled.main<WrapperProps>`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.layers.overlay};

  &::before {
    content: '';
    position: absolute;
    right: 0;
    border-style: solid;
    border-left-width: 0rem;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-bottom-width: 1rem;
  }

  ${({ theme, color, size }) => css`
    top: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${size && wrapperVariants[size]};
    ${color && wrapperVariants.color(color)};
  `}
`
