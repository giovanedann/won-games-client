import { QueryHome_upcomingGames } from 'graphql/generated/QueryHome'
import getImageUrl from 'utils/getImageUrl'

export type Game = {
  title: string
  slug: string
  developer: string
  img: string
  price: number
}

export default function upcomingGamesAdapter(
  apiNewGames: QueryHome_upcomingGames[]
): Game[] {
  return apiNewGames.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: getImageUrl(game.cover?.url ?? '/uploads/diablo_4_55aedfef91.jpg'),
    price: game.price
  }))
}