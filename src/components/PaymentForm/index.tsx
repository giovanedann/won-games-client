import { FormEvent, useEffect, useState } from 'react'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import { MdShoppingCart, MdErrorOutline } from 'react-icons/md'

import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'
import { useCart } from 'contexts/cart'
import { Session } from 'next-auth'
import StripeService from 'services/StripeService'
import { FormLoader } from 'components/Form'
import { useRouter } from 'next/router'

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
        token: session.jwt
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

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    if (areGamesFree) {
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
