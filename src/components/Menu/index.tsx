import * as S from './styles'
import { MdSearch, MdOutlineShoppingCart, MdClose } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Logo from 'components/Logo'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'

type MenuProps = {
  username?: string
}

function Menu({ username }: MenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <HiOutlineMenuAlt1 aria-label="open menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <S.MenuLink href="/">
          <Logo hideOnMobile />
        </S.MenuLink>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuLink href="/">Home</S.MenuLink>
        <S.MenuLink href="/games">Explore</S.MenuLink>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <MdSearch aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MdOutlineShoppingCart aria-label="open shopping cart" />
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username && (
            <Link href="/sign-in">
              <Button>Sign in</Button>
            </Link>
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.OpenedMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <MdClose aria-label="close menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {Boolean(username) && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in">
              <Button fullWidth size="large">
                Log in now
              </Button>
            </Link>
            <span>or</span>
            <S.SignUp href="/sign-up" title="Sign Up">
              Sign Up
            </S.SignUp>
          </S.RegisterBox>
        )}
      </S.OpenedMenu>
    </S.Wrapper>
  )
}

export default Menu
