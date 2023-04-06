import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import { initializeApollo } from 'graphql/client'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { GET_GAMES } from 'graphql/queries/games'
import GamesTemplate, { GameTemplateProps } from 'templates/Games'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      games: data?.games?.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl(
          game.cover?.url ?? '/uploads/No_image_available_38adfae762.png'
        ),
        price: formatPrice(game.price)
      })),
      filterItems: exploreSidebarMocks
    }
  }
}
