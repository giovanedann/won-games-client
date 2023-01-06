import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  onInputChange?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
}

function TextField({
  onInputChange,
  label,
  labelFor,
  initialValue,
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
        <S.Input type="text" onChange={onChange} value={value} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
