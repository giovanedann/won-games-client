import { MouseEvent, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: MouseEvent<HTMLButtonElement>) => void
}

function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  onClick
}: ButtonProps) {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={Boolean(icon)}
      onClick={onClick}
    >
      {icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
