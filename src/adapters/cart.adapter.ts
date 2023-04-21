import { GetGames_games } from 'graphql/generated/GetGames'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

export default function cartAdapter(games: GetGames_games[] = []) {
  return games?.map((game) => ({
    id: game.id,
    img: getImageUrl(game.cover?.url ?? ''),
    title: game.name,
    price: formatPrice(game.price)
  }))
}
