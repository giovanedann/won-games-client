import * as S from './styles'
import { MdSearch, MdOutlineShoppingCart } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Logo from 'components/Logo'

function Menu() {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <HiOutlineMenuAlt1 />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <MdSearch />
        </S.IconWrapper>
        <S.IconWrapper>
          <MdOutlineShoppingCart />
        </S.IconWrapper>
      </S.MenuGroup>
    </S.Wrapper>
  )
}

export default Menu
