import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = ButtonTypes & {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: ElementType
}

function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={Boolean(icon)}
      {...props}
    >
      {icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
