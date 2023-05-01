import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};
    row-gap: ${theme.spacings.medium};

    > button {
      margin-top: ${theme.spacings.xxlarge};
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.medium};
      row-gap: ${theme.spacings.xsmall};

      > button {
        justify-self: end;
        margin-top: 0;
      }
    `}
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  grid-column: 1/3;
`

export const ResetButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.greaterThan('medium')`
    grid-column: 2;
  `}
`
