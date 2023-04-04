import { QueryHome_newGames } from 'graphql/generated/QueryHome'
import getImageUrl from 'utils/getImageUrl'

export type Game = {
  title: string
  slug: string
  developer: string
  img: string
  price: number
}

export default function newGamesAdapter(
  apiNewGames: QueryHome_newGames[]
): Game[] {
  return apiNewGames.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: getImageUrl(
      game.cover?.url ?? '/uploads/No_image_available_38adfae762.png'
    ),
    price: game.price
  }))
}
