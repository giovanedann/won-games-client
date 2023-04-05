import { recommendedGamesAdapter } from 'adapters/recommended.adapter'
import gameCardSliderMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import { initializeApollo } from 'graphql/client'
import {
  GetGameBySlug,
  GetGameBySlugVariables
} from 'graphql/generated/GetGameBySlug'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { GET_GAMES, GET_GAME_BY_SLUG } from 'graphql/queries/games'
import { GET_RECOMMENDED } from 'graphql/queries/recommended'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Game, { GameTemplateProps } from 'templates/Game'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // if the route is not generated yet, show a loading/skeleton component
  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    GetGameBySlug,
    GetGameBySlugVariables
  >({
    query: GET_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: GET_RECOMMENDED
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const [game] = data.games

  return {
    props: {
      revalidate: 60,
      coverImg: getImageUrl(
        game.cover?.src || '/uploads/No_image_available_38adfae762.png'
      ),
      gameInfo: {
        title: game.name,
        price: formatPrice(game.price),
        description: game.short_description
      },
      gallery: game.gallery.map(({ src, label }) => ({
        src: getImageUrl(src),
        label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(({ name }) => name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(({ name }) => name)
      },
      upcommingGames: gameCardSliderMock,
      upcommingHighlight: highlightMock,
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: recommendedGamesAdapter(
        recommended.recommended?.section?.games
      )
    }
  }
}
