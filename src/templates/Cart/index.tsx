import Container from 'components/Container'
import Divider from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import CartList, { CartListProps } from 'components/CartList'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'
import Empty from 'components/Empty'
import { useCart } from 'contexts/cart'

export type CartProps = CartListProps &
  Pick<PaymentOptionsProps, 'cards'> & {
    recommendedGames: GameCardProps[]
    recommendedTitle?: string
    recommendedHighlight: HighlightProps
  }

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  const { items } = useCart()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items.length > 0 ? (
          <S.Content>
            <CartList />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle ?? 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
