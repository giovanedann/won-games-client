import * as S from './styles'
import { MdSearch, MdOutlineShoppingCart, MdClose } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Logo from 'components/Logo'
import { useState } from 'react'
import Button from 'components/Button'

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
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          <>
            <S.MenuLink href="#">My account</S.MenuLink>
            <S.MenuLink href="#">Wishlist</S.MenuLink>
          </>
        </S.MenuNav>
        <S.RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <S.SignUp href="#" title="Sign Up">
            Sign Up
          </S.SignUp>
        </S.RegisterBox>
      </S.OpenedMenu>
    </S.Wrapper>
  )
}

export default Menu
