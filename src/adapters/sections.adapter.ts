import { QueryHome_sections } from 'graphql/generated/QueryHome'
import getImageUrl from 'utils/getImageUrl'

export default function sectionsAdapter(apiSections: QueryHome_sections) {
  const mostPopularGames = apiSections.popularGames?.games.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: getImageUrl(
      game.cover?.url ?? '/uploads/No_image_available_38adfae762.png'
    ),
    price: game.price === 0 ? 'Free' : `$${game.price}`
  }))

  return { mostPopularGames }
}
