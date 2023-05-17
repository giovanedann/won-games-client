import { CartItem } from 'contexts/cart'
import { PaymentIntent } from '@stripe/stripe-js'
import HttpClient from 'infra/http/client'

type CreatePaymentIntentParams = {
  items: CartItem[]
  token: string
}

type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent?: PaymentIntent
  token: string
}

class StripeService {
  async createPaymentIntent({ items, token }: CreatePaymentIntentParams) {
    return HttpClient.post({
      route: '/orders/create-payment-intent',
      body: JSON.stringify({ cart: items }),
      token
    })
  }

  async createPayment({ items, paymentIntent, token }: CreatePaymentParams) {
    return HttpClient.post({
      route: '/orders',
      body: JSON.stringify({
        cart: items,
        paymentIntentId: paymentIntent?.id,
        paymentMethod: paymentIntent?.payment_method
      }),
      token
    })
  }
}

export default new StripeService()
