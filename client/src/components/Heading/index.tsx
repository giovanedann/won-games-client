import { ReactNode } from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

function Heading({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) {
  return (
    <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Wrapper>
  )
}

export default Heading