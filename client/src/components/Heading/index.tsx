import { ReactNode } from 'react'
import * as S from './styles'

type HeadingProps = {
  children: ReactNode
}

function Heading({ children }: HeadingProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Heading
