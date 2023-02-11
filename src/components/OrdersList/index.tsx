import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'

import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

function OrdersList({ items }: OrdersListProps) {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My orders
      </Heading>

      {items &&
        items.length > 0 &&
        items.map((item) => <GameItem key={item.downloadLink} {...item} />)}

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
