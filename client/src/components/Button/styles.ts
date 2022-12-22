import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Omit<ButtonProps, 'children'> & {
  hasIcon: boolean
}

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
  `,
  hasIcon: (size: 'small' | 'medium' | 'large') => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      & + span {
        margin-left: ${({ theme }) => theme.spacings.xxsmall};
      }
    }

    ${size === 'small' &&
    css`
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    `}

    ${size === 'medium' &&
    css`
      svg {
        width: 1.7rem;
        height: 1.7rem;
      }
    `}

    ${size === 'large' &&
    css`
      svg {
        width: 2rem;
        height: 2rem;
      }
    `}
  `
}

export const Wrapper = styled.button<WrapperProps>`
  background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
  border: none;
  font-weight: 600;
  cursor: pointer;

  ${({ theme, size, fullWidth, hasIcon }) => css`
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    ${wrapperVariants[size!]};
    ${fullWidth && wrapperVariants.fullWidth};
    ${hasIcon && wrapperVariants.hasIcon(size!)};
  `}
`
