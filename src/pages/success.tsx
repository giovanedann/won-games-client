import Success, { SuccessTemplateProps } from 'templates/Success'

import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { initializeApollo } from 'infra/apollo/client'
import { GET_RECOMMENDED } from 'graphql/queries/recommended'
import { recommendedGamesAdapter } from 'adapters/recommended.adapter'
import highlightAdapter from 'adapters/highlight.adapter'

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: GET_RECOMMENDED
  })

  return {
    revalidate: 60 * 60,
    props: {
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
