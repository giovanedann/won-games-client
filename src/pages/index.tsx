import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import { initializeApollo } from 'graphql/client'
import { GET_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import BannerAdapter from 'adapters/banners.adapter'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: GET_HOME })

  return {
    props: {
      revalidate: 60,
      banners: BannerAdapter(data.banners),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
