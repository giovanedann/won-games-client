import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  onInputChange?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  iconPosition?: 'left' | 'right'
  icon?: ReactNode
}

function TextField({
  onInputChange,
  label,
  labelFor,
  initialValue,
  iconPosition = 'left',
  icon,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue ?? '')

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const updatedValue = event.currentTarget.value
    setValue(updatedValue)

    onInputChange && onInputChange(updatedValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...props}
        />
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
