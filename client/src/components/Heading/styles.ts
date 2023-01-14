import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from '.'

const wrapperVariants = {
  lineLeft: (lineColor: LineColors) => css`
    padding-left: ${({ theme }) => theme.spacings.xxsmall};
    border-left: 0.7rem solid ${({ theme }) => theme.colors[lineColor]};
  `,

  lineBottom: (lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.7rem solid ${({ theme }) => theme.colors[lineColor]};
    }
  `,

  small: css`
    font-size: ${({ theme }) => theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${({ theme }) => theme.font.sizes.large};
    `}

    &::after {
      width: 3rem;
    }
  `,

  medium: css`
    font-size: ${({ theme }) => theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    `}
  `,

  huge: css`
    font-size: ${({ theme }) => theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperVariants.lineLeft(lineColor!)}
    ${lineBottom && wrapperVariants.lineBottom(lineColor!)}
    ${size && wrapperVariants[size]}
  `}
`
