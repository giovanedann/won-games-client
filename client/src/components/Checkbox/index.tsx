import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
}

function Checkbox({ label, labelFor }: CheckboxProps) {
  return (
    <S.Wrapper>
      <input type="checkbox" id={labelFor} />
      {label && (
        <label htmlFor={labelFor} role="label">
          {label}
        </label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
