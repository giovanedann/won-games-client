import { MdShoppingCart } from 'react-icons/md'
import * as S from './styles'

type CartIconProps = {
  quantity?: number
}

function CartIcon({ quantity = 0 }: CartIconProps) {
  return (
    <S.Wrapper>
      {quantity > 0 && (
        <S.Badge aria-label="cart items quantity">{quantity}</S.Badge>
      )}

      <MdShoppingCart aria-label="shopping cart icon" />
    </S.Wrapper>
  )
}

export default CartIcon
