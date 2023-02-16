import { ReactNode, useState } from 'react'
import * as S from './styles'

type DropdownProps = {
  title: ReactNode
  children: ReactNode
}

function Dropdown({ children, title }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen((prev) => !prev)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
