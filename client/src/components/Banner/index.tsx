import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

function Banner() {
  return (
    <S.Wrapper>
      <h1>Banner</h1>
    </S.Wrapper>
  )
}

export default Banner
