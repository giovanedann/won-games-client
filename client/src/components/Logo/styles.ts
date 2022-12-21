import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperVariants = {
  large: css`
    width: 20rem;
    height: 5.9rem;
  `,
  normal: css`
    width: 11rem;
    height: 3.3rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    ${wrapperVariants[size!]};
  `}
`
