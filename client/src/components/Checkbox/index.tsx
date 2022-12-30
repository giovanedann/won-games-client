import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) {
  return (
    <S.Wrapper>
      <S.Input type="checkbox" id={labelFor} />

      {label && (
        <S.Label htmlFor={labelFor} role="label" labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
