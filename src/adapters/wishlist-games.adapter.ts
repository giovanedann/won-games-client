import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
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

export default function wishlistGamesAdapter(
  apiWishlistGames: QueryWishlist_wishlists_games[]
): Game[] {
  return apiWishlistGames.map((game) => ({
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
