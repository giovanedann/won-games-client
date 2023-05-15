import { CartItem } from 'contexts/cart'
import HttpClient from 'infra/http/client'

type CreatePaymentIntentParams = {
  items: CartItem[]
  token: string
}

class StripeService {
  async createPaymentIntent({ items, token }: CreatePaymentIntentParams) {
    return HttpClient.post({
      route: '/orders/create-payment-intent',
      body: JSON.stringify(items),
      token
    })
  }
}

export default new StripeService()
