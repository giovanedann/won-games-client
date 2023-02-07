import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  iconPosition?: 'left' | 'right'
  icon?: ReactNode
  disabled?: boolean
  error?: string
}

function TextField({
  onInputChange,
  label,
  initialValue,
  name,
  iconPosition = 'left',
  icon,
  disabled = false,
  error,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue ?? '')

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const updatedValue = event.currentTarget.value
    setValue(updatedValue)

    onInputChange && onInputChange(updatedValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
        {icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
