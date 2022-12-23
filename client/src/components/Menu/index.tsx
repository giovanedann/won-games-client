import * as S from './styles'
import { MdSearch, MdOutlineShoppingCart, MdClose } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Logo from 'components/Logo'
import { useState } from 'react'

function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <HiOutlineMenuAlt1 aria-label="open menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <MdSearch aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MdOutlineShoppingCart aria-label="open shopping cart" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.OpenedMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <MdClose aria-label="close menu" onClick={() => setIsOpen(false)} />
      </S.OpenedMenu>
    </S.Wrapper>
  )
}

export default Menu
