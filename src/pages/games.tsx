import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import { initializeApollo } from 'graphql/client'
import { GET_GAMES } from 'graphql/queries/games'
import GamesTemplate, { GameTemplateProps } from 'templates/Games'

type GameDevelopers = { name: string }

type GameProps = {
  name: string
  slug: string
  cover: {
    url: string
  }
  developers: GameDevelopers[]
  price: number
}

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      games: data?.games?.map((game: GameProps) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      filterItems: exploreSidebarMocks
    }
  }
}
