import { CartItem } from 'contexts/cart'

type CreatePaymentIntentParams = {
  items: CartItem[]
  token: string
}

class StripeService {
  async createPaymentIntent({ items, token }: CreatePaymentIntentParams) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/create-payment-intent`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart: items })
      }
    )

    return await response.json()
  }
}

export default new StripeService()
