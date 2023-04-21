import highlightAdapter from 'adapters/highlight.adapter'
import { recommendedGamesAdapter } from 'adapters/recommended.adapter'
import upcomingGamesAdapter from 'adapters/upcoming-games.adapter'
import {
  GetGameBySlug,
  GetGameBySlugVariables
} from 'graphql/generated/GetGameBySlug'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { GET_GAMES, GET_GAME_BY_SLUG } from 'graphql/queries/games'
import { GET_RECOMMENDED } from 'graphql/queries/recommended'
import { GET_UPCOMING } from 'graphql/queries/upcoming'
import { initializeApollo } from 'infra/apollo/client'
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
  // game by slug data
  const { data } = await apolloClient.query<
    GetGameBySlug,
    GetGameBySlugVariables
  >({
    query: GET_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  const [game] = data.games

  // recommended games data
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: GET_RECOMMENDED
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  // upcoming games data
  const today = new Date().toISOString().slice(0, 10)

  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: GET_UPCOMING,
    variables: {
      date: today
    }
  })

  return {
    revalidate: 60,
    props: {
      coverImg: getImageUrl(
        game.cover?.src || '/uploads/No_image_available_38adfae762.png'
      ),
      gameInfo: {
        id: game.id,
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
      upcomingGames: upcomingGamesAdapter(upcoming.upcomingGames),
      upcomingHighlight: highlightAdapter(
        recommended.recommended?.section?.highlight
      ),
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: recommendedGamesAdapter(
        recommended.recommended?.section?.games
      )
    }
  }
}
