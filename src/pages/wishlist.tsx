import WishlistTemplate, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/data.mock'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { GET_RECOMMENDED } from 'graphql/queries/recommended'
import { recommendedGamesAdapter } from 'adapters/recommended.adapter'
import highlightAdapter from 'adapters/highlight.adapter'
import { initializeApollo } from 'infra/apollo/client'
import { GetServerSidePropsContext } from 'next'
import protectedRoute from 'utils/protectedRoute'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlistTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  if (!session) {
    return { props: {} }
  }

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: GET_RECOMMENDED
  })

  return {
    props: {
      session,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: recommendedGamesAdapter(
        data.recommended?.section?.games
      ),
      games: gamesMock,
      recommendedHighlight: highlightAdapter(
        data.recommended?.section?.highlight
      )
    }
  }
}
