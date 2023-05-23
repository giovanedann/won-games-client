import { GetOrders_orders } from 'graphql/generated/GetOrders'
import formatPrice from 'utils/formatPrice'
import getImageUrl from 'utils/getImageUrl'

export default function ordersAdapter(orders: GetOrders_orders[]) {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand
              ? `/img/credit-cards/${order.card_brand}.png`
              : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: getImageUrl(
              game.cover?.url ?? '/uploads/No_image_available_38adfae762.png'
            ),
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}
