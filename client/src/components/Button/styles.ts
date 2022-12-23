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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  ${({ theme, size, fullWidth, hasIcon }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    ${wrapperVariants[size!]};
    ${fullWidth && wrapperVariants.fullWidth};
    ${hasIcon && wrapperVariants.hasIcon(size!)};
  `}
`
