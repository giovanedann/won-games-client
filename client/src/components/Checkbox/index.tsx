import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (value: boolean) => void
}

function Checkbox({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  function onChange() {
    setIsChecked((prev) => !prev)

    if (onCheck) {
      onCheck(isChecked)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={isChecked}
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
