import { FormEvent, useEffect, useState } from 'react'
import { StripeCardElementChangeEvent, PaymentIntent } from '@stripe/stripe-js'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import { MdShoppingCart, MdErrorOutline } from 'react-icons/md'

import Button from 'components/Button'
import { FormLoader } from 'components/Form'
import Heading from 'components/Heading'

import { useCart } from 'contexts/cart'

import StripeService from 'services/StripeService'

import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

function PaymentForm({ session }: PaymentFormProps) {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState<string>('')
  const [areGamesFree, setAreGamesFree] = useState<boolean>(false)

  const stripe = useStripe()
  const elements = useElements()

  const { items } = useCart()

  const { push } = useRouter()

  // function to handle change of the payment card component
  function handleChange(event: StripeCardElementChangeEvent) {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : null)
  }

  // function to check if all games are free and set the payment mode
  async function setPaymentMode() {
    if (items.length) {
      // create payment intent of the items
      const data = await StripeService.createPaymentIntent({
        items,
        token: session?.jwt ?? ''
      })

      // if data.freeGames is true, change the state
      if (data.freeGames) {
        setAreGamesFree(true)
        return
      }

      // on error, set error from server
      if (data.error) {
        setError(data.error)
        return
      }

      // if code reaches here, the payment is valid, so we set the client secret
      setAreGamesFree(false)
      setClientSecret(data.client_secret)
    }
  }

  // function to save the order on the database
  async function saveOrder(paymentIntent?: PaymentIntent) {
    const data = await StripeService.createPayment({
      items,
      paymentIntent,
      token: session.jwt
    })

    return data
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    if (areGamesFree) {
      // saves the order on database
      await saveOrder()

      // redirects user to purchase success page
      push('/success')

      return
    }

    // confirmation of payment
    const payload = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload?.error) {
      setError(`Payment failed! ${payload.error.message}`)
      setIsLoading(false)
    } else {
      setError(null)
      await saveOrder(payload?.paymentIntent)
      setIsLoading(false)
      push('/success')
    }
  }

  useEffect(() => {
    setPaymentMode()
  }, [items, session]) // eslint-disable-line

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
        {areGamesFree && (
          <S.FreeGamesInfo>
            Only free games in cart! Click buy and enjoy!
          </S.FreeGamesInfo>
        )}
        {!areGamesFree}{' '}
        {
          <CardElement
            options={{
              hidePostalCode: true,
              style: { base: { fontSize: '1.2rem' } }
            }}
            onChange={handleChange}
          />
        }
        {error && (
          <S.Error>
            <MdErrorOutline size={20} />
            {error}
          </S.Error>
        )}
      </S.Body>

      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>

        <Button
          fullWidth
          icon={isLoading ? <FormLoader /> : <MdShoppingCart />}
          disabled={!!error || disabled}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
