import * as S from './styles'

function Checkbox() {
  return (
    <S.Wrapper>
      <input type="checkbox" id="action" />
      <label htmlFor="action">Label</label>
    </S.Wrapper>
  )
}

export default Checkbox
