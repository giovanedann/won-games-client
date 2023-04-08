import Cart, { CartProps } from 'templates/Cart'

import cartListMock from 'components/CartList/data.mock'
import paymentOptionsMock from 'components/PaymentOptions/data.mock'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { GET_RECOMMENDED } from 'graphql/queries/recommended'
import { recommendedGamesAdapter } from 'adapters/recommended.adapter'
import highlightAdapter from 'adapters/highlight.adapter'
import { initializeApollo } from 'infra/apollo/client'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: GET_RECOMMENDED
  })

  return {
    props: {
      items: cartListMock,
      total: '$430,00',
      cards: paymentOptionsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: recommendedGamesAdapter(
        data.recommended?.section?.games
      ),
      recommendedHighlight: highlightAdapter(
        data.recommended?.section?.highlight
      )
    }
  }
}
