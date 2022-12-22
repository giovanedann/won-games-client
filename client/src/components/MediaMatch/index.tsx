import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoints = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: Breakpoints
  greaterThan?: Breakpoints
}

const mediaMatchVariants = {
  lessThan: (size: Breakpoints) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  greaterThan: (size: Breakpoints) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${lessThan && mediaMatchVariants.lessThan(lessThan)}
    ${greaterThan && mediaMatchVariants.greaterThan(greaterThan)}
  `}
`
