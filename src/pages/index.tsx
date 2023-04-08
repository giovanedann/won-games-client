import Home, { HomeTemplateProps } from 'templates/Home'
import { GET_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import bannerAdapter from 'adapters/banners.adapter'
import newGamesAdapter from 'adapters/new-games.adapter'
import upcomingGamesAdapter from 'adapters/upcoming-games.adapter'
import freeGamesAdapter from 'adapters/free-games.adapter'
import sectionsAdapter from 'adapters/sections.adapter'
import highlightAdapter from 'adapters/highlight.adapter'
import { initializeApollo } from 'infra/apollo/client'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const today = new Date().toISOString().slice(0, 10)

  const { data } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: GET_HOME,
    variables: { date: today }
  })

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
