import Cart, { CartProps } from 'templates/Cart'

import cartListMock from 'components/CartList/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import higlightMock from 'components/Highlight/data.mock'
import paymentOptionsMock from 'components/PaymentOptions/data.mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: cartListMock,
      total: '$ 430,00',
      cards: paymentOptionsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock
    }
  }
}
