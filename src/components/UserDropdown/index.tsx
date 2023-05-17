import Dropdown from 'components/Dropdown'
import { FiChevronDown } from 'react-icons/fi'
import { MdAccountCircle, MdExitToApp, MdFavoriteBorder } from 'react-icons/md'
import * as S from './styles'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

type UserDropdownProps = {
  username: string
}

function UserDropdown({ username }: UserDropdownProps) {
  const { push } = useRouter()

  async function handleSignOut() {
    const data = await signOut({ redirect: false, callbackUrl: '/' })
    push(data.url)
  }

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

        <S.StyledLink title="Sign out" onClick={handleSignOut}>
          <MdExitToApp />
          <span>Sign out</span>
        </S.StyledLink>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
