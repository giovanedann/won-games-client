import { QueryRecommended_recommended_section_games } from 'graphql/generated/QueryRecommended'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

export type Game = {
  title: string
  slug: string
  developer: string
  img: string
  price: string
}

export function recommendedGamesAdapter(
  apiNewGames: QueryRecommended_recommended_section_games[] | undefined
): Game[] {
  if (!apiNewGames) return []

  return apiNewGames.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: getImageUrl(
      game.cover?.url ?? '/uploads/No_image_available_38adfae762.png'
    ),
    price: game.price === 0 ? 'Free' : formatPrice(game.price)
  }))
}
