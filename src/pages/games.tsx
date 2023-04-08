import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { GET_GAMES } from 'graphql/queries/games'
import { initializeApollo } from 'infra/apollo/client'
import GamesTemplate, { GameTemplateProps } from 'templates/Games'

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: exploreSidebarMocks
    }
  }
}
