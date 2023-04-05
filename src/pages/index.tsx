import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'graphql/client'
import { GET_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import bannerAdapter from 'adapters/banners.adapter'
import newGamesAdapter from 'adapters/new-games.adapter'
import upcomingGamesAdapter from 'adapters/upcoming-games.adapter'
import freeGamesAdapter from 'adapters/free-games.adapter'
import sectionsAdapter from 'adapters/sections.adapter'
import highlightAdapter from 'adapters/highlight.adapter'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: GET_HOME })

  const { mostPopularGames } = sectionsAdapter(data.sections!)

  return {
    props: {
      revalidate: 60,
      banners: bannerAdapter(data.banners),
      newGamesTitle: data.sections?.newGames?.title,
      newGames: newGamesAdapter(data.newGames),
      mostPopularGamesTitle: data.sections?.popularGames?.title,
      mostPopularHighlight: highlightAdapter(
        data.sections?.popularGames?.highlight || null
      ),
      mostPopularGames: mostPopularGames,
      upcomingGamesTitle: data.sections?.upcomingGames?.title,
      upcomingGames: upcomingGamesAdapter(data.upcomingGames),
      upcomingHighlight: highlightAdapter(
        data.sections?.upcomingGames?.highlight || null
      ),
      freeGamesTitle: data.sections?.freeGames?.title,
      freeGames: freeGamesAdapter(data.freeGames),
      freeHighlight: highlightAdapter(
        data.sections?.freeGames?.highlight || null
      )
    }
  }
}
