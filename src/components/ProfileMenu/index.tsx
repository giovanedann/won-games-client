import {
  MdAccountCircle,
  MdCreditCard,
  MdExitToApp,
  MdFormatListBulleted
} from 'react-icons/md'

import * as S from './styles'

function ProfileMenu() {
  return (
    <S.Nav>
      <S.StyledLink href="/profile/me">
        <MdAccountCircle size={24} />
        <span>My profile</span>
      </S.StyledLink>

      <S.StyledLink href="/profile/cards">
        <MdCreditCard size={24} />
        <span>My cards</span>
      </S.StyledLink>

      <S.StyledLink href="/profile/orders">
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
