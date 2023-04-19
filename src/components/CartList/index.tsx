import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'

import * as S from './styles'
import { useCart } from 'contexts/cart'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, totalPrice } = useCart()

  return (
    <S.Wrapper isEmpty={items.length === 0}>
      {items.length > 0 && (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{totalPrice}</S.Total>

            {hasButton && <Button as="a">Buy it now</Button>}
          </S.Footer>
        </>
      )}

      {items.length === 0 && (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
