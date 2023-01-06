import styled, { css } from 'styled-components'
import { TextFieldProps } from '.'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.gray[100]};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.gray[100]};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

type InputProps = Pick<TextFieldProps, 'iconPosition'>

export const Input = styled.input<InputProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    order: ${iconPosition === 'right' ? 0 : 1};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

type IconProps = Pick<TextFieldProps, 'iconPosition'>

export const Icon = styled.div<IconProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray[600]};
    align-items: center;
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`

type WrapperProps = Pick<TextFieldProps, 'disabled'>

const wrapperVariants = {
  disabled: css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.gray[400]};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ disabled }) => disabled && wrapperVariants.disabled};
`
