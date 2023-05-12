import {
  MdAccountCircle,
  MdExitToApp,
  MdFormatListBulleted
} from 'react-icons/md'

import * as S from './styles'
import { signOut } from 'next-auth/react'

export type ActiveLinks = '/profile/me' | '/profile/cards' | '/profile/orders'

export type ProfileMenuProps = {
  activeLink?: ActiveLinks
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
        href="/profile/orders"
        isActive={activeLink === '/profile/orders'}
        title="my orders"
      >
        <MdFormatListBulleted size={24} />
        <span>My orders</span>
      </S.StyledLink>

      <S.StyledLink href="/logout" onClick={() => signOut()}>
        <MdExitToApp size={24} />
        <span>Sign out</span>
      </S.StyledLink>
    </S.Nav>
  )
}

export default ProfileMenu
