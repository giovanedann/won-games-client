import {
  MdAccountCircle,
  MdCreditCard,
  MdExitToApp,
  MdFormatListBulleted
} from 'react-icons/md'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

function ProfileMenu({ activeLink }: ProfileMenuProps) {
  return (
    <S.Nav>
      <S.StyledLink
        href="/profile/me"
        isActive={activeLink === '/profile/me'}
        title="my profile"
      >
        <MdAccountCircle size={24} />
        <span>My profile</span>
      </S.StyledLink>

      <S.StyledLink
        href="/profile/cards"
        isActive={activeLink === '/profile/cards'}
        title="my cards"
      >
        <MdCreditCard size={24} />
        <span>My cards</span>
      </S.StyledLink>

      <S.StyledLink
        href="/profile/orders"
        isActive={activeLink === '/profile/orders'}
        title="my orders"
      >
        <MdFormatListBulleted size={24} />
        <span>My orders</span>
      </S.StyledLink>

      <S.StyledLink href="/logout">
        <MdExitToApp size={24} />
        <span>Sign out</span>
      </S.StyledLink>
    </S.Nav>
  )
}

export default ProfileMenu
