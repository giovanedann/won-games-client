import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Omit<ButtonProps, 'children'>

const wrapperVariants = {
  small: css`
    height: 3rem;
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  `,
  medium: css`
    height: 4rem;
    font-size: ${({ theme }) => theme.font.sizes.small};
    padding: ${({ theme }) =>
      `${theme.spacings.xxsmall} ${theme.spacings.medium}`};
  `,
  large: css`
    height: 5rem;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    padding: ${({ theme }) =>
      `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`};
  `,
  fullWidth: css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
  border: none;
  font-weight: 600;
  cursor: pointer;

  ${({ theme, size, fullWidth }) => css`
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    ${wrapperVariants[size!]};
    ${fullWidth && wrapperVariants.fullWidth};
  `}
`
