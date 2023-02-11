import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray[100]};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const CreditCardImgBox = styled.div`
  position: relative;
  width: 3.8rem;
  height: 2.4rem;
`
