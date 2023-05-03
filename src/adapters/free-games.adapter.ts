import { QueryHome_freeGames } from 'graphql/generated/QueryHome'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

export type Game = {
  id: string
  title: string
  slug: string
  developer: string
  img: string
  price: string
}

export default function freeGamesAdapter(
  apiNewGames: QueryHome_freeGames[]
): Game[] {
  return apiNewGames.map((game) => ({
    id: game.id,
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: getImageUrl(
      game.cover?.url ?? '/uploads/No_image_available_38adfae762.png'
    ),
    price: game.price === 0 ? 'Free' : formatPrice(game.price)
  }))
}
