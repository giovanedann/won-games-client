import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'

import * as S from './styles'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items?: OrderProps[]
}

function OrdersList({ items }: OrdersListProps) {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My orders
      </Heading>

      {items &&
        items.length > 0 &&
        items.map((order) => {
          return order.games.map((game) => (
            <GameItem
              key={order.id}
              {...game}
              paymentInfo={order.paymentInfo}
            />
          ))
        })}

      {items && items.length === 0 && (
        <Empty
          title="You have no orders"
          hasLink
          description="Go back to the store and explore great games and offers"
        />
      )}
    </S.Wrapper>
  )
}

export default OrdersList
