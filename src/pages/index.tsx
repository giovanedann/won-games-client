import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import { initializeApollo } from 'graphql/client'
import { GET_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import bannerAdapter from 'adapters/banners.adapter'
import newGamesAdapter from 'adapters/new-games.adapter'
import upcomingGamesAdapter from 'adapters/upcoming-games.adapter'
import freeGamesAdapter from 'adapters/free-games.adapter'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: GET_HOME })

  return {
    props: {
      revalidate: 60,
      banners: bannerAdapter(data.banners),
      newGames: newGamesAdapter(data.newGames),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: upcomingGamesAdapter(data.upcomingGames),
      upcomingHighlight: highlightMock,
      freeGames: freeGamesAdapter(data.freeGames),
      freeHighlight: highlightMock
    }
  }
}
