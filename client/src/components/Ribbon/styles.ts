import styled, { css } from 'styled-components'

import { RibbonProps, RibbonColors } from '.'

const wrapperVariants = {
  color: (color: RibbonColors) => css`
    background-color: ${({ theme }) => theme.colors[color]};
  `,

  normal: css`
    font-size: ${({ theme }) => theme.font.sizes.small};
    height: 3.6rem;
  `,

  small: css`
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    height: 2.6rem;
  `
}

type WrapperProps = Omit<RibbonProps, 'children'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ color, size }) => css`
    ${size && wrapperVariants[size]};
    ${color && wrapperVariants.color(color)};
  `}
`
