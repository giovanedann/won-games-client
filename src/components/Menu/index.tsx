import * as S from './styles'
import { MdSearch, MdClose } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Logo from 'components/Logo'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'
import UserDropdown from 'components/UserDropdown'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'

type MenuProps = {
  username: string | null
  isLoading: boolean
}

function Menu({ username, isLoading }: MenuProps) {
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

      {!isLoading && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <MdSearch aria-label="search" />
            </S.IconWrapper>

            <S.IconWrapper>
              <MediaMatch greaterThan="medium">
                <CartDropdown />
              </MediaMatch>

              <MediaMatch lessThan="medium">
                <CartIcon aria-label="open shopping cart" />
              </MediaMatch>
            </S.IconWrapper>

            <MediaMatch greaterThan="medium">
              {!username && (
                <Link href="/sign-in">
                  <Button>Sign in</Button>
                </Link>
              )}

              {username && <UserDropdown username={username} />}
            </MediaMatch>
          </S.MenuGroup>

          <S.OpenedMenu aria-hidden={!isOpen} isOpen={isOpen}>
            <MdClose aria-label="close menu" onClick={() => setIsOpen(false)} />

            <S.MenuNav>
              <S.MenuLink href="/">Home</S.MenuLink>
              <S.MenuLink href="/games">Explore</S.MenuLink>
              {Boolean(username) && (
                <>
                  <S.MenuLink href="/profile/me">My profile</S.MenuLink>
                  <S.MenuLink href="/profile/wishlist">Wishlist</S.MenuLink>
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
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
