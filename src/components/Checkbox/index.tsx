import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  labelFor?: string
  isChecked?: boolean
  labelColor?: 'white' | 'black'
  onCheck?: (value: boolean) => void
  value?: string | ReadonlyArray<string> | number
}

function Checkbox({
  isChecked = false,
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(isChecked)

  function onChange() {
    setIsCheckboxChecked((prev) => {
      if (onCheck) {
        onCheck(!prev)
      }

      return !prev
    })
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={isCheckboxChecked}
        value={value}
        {...props}
      />

      {label && (
        <S.Label htmlFor={labelFor} role="label" labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
