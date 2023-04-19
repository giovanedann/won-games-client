import { MdShoppingCart } from 'react-icons/md'
import * as S from './styles'
import { useCart } from 'contexts/cart'

function CartIcon() {
  const { itemsQuantity } = useCart()

  return (
    <S.Wrapper>
      {itemsQuantity > 0 && (
        <S.Badge aria-label="cart items quantity">{itemsQuantity}</S.Badge>
      )}

      <MdShoppingCart aria-label="shopping cart icon" />
    </S.Wrapper>
  )
}

export default CartIcon
