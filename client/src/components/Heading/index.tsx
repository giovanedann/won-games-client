import { ReactNode } from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: ReactNode
  color: 'white' | 'black'
}

function Heading({ children, color = 'white' }: HeadingProps) {
  return <S.Wrapper color={color}>{children}</S.Wrapper>
}

export default Heading
