import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'

import * as S from './styles'
import { useCart } from 'contexts/cart'
import Loader from 'components/Loader'
import Link from 'next/link'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, totalPrice, loading } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )
  }

  return (
    <S.Wrapper isEmpty={items.length === 0}>
      {items.length > 0 && (
        <S.GamesList>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{totalPrice}</S.Total>

            {hasButton && (
              <Link href="/cart">
                <Button>Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </S.GamesList>
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
