import Dropdown from 'components/Dropdown'
import { FiChevronDown } from 'react-icons/fi'
import { MdAccountCircle, MdExitToApp, MdFavoriteBorder } from 'react-icons/md'
import * as S from './styles'
import { signOut } from 'next-auth/react'

type UserDropdownProps = {
  username: string
}

function UserDropdown({ username }: UserDropdownProps) {
  return (
    <Dropdown
      title={
        <>
          <MdAccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <FiChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <S.StyledNextLink href="/profile/me" title="Profile">
          <MdAccountCircle />
          <span>My profile</span>
        </S.StyledNextLink>

        <S.StyledNextLink href="/wishlist" title="Wishlist">
          <MdFavoriteBorder />
          <span>Wishlist</span>
        </S.StyledNextLink>

        <S.StyledNextLink
          href="/logout"
          title="Sign out"
          onClick={() => signOut()}
        >
          <MdExitToApp />
          <span>Sign out</span>
        </S.StyledNextLink>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
