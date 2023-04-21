import { QueryHome_sections } from 'graphql/generated/QueryHome'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

export type Game = {
  title: string
  slug: string
  developer: string
  img: string
  price: string
}

export type SectionsAdapterResult = {
  mostPopularGames?: Game[]
}

export default function sectionsAdapter(
  apiSections: QueryHome_sections
): SectionsAdapterResult {
  const mostPopularGames = apiSections.popularGames?.games.map((game) => ({
    id: game.id,
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: getImageUrl(
      game.cover?.url ?? '/uploads/No_image_available_38adfae762.png'
    ),
    price: game.price === 0 ? 'Free' : formatPrice(game.price)
  }))

  return { mostPopularGames }
}
