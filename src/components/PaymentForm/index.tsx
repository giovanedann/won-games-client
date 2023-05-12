import { useEffect, useState } from 'react'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { CardElement } from '@stripe/react-stripe-js'

import { MdShoppingCart, MdErrorOutline } from 'react-icons/md'

import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'
import { useCart } from 'contexts/cart'
import { Session } from 'next-auth'
import StripeService from 'services/StripeService'

type PaymentFormProps = {
  session: Session
}

function PaymentForm({ session }: PaymentFormProps) {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [clientSecret, setClientSecret] = useState<string>('') // eslint-disable-line
  const [areGamesFree, setAreGamesFree] = useState<boolean>(false)

  const { items } = useCart()

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

  useEffect(() => {
    setPaymentMode()
  }, [items, session]) // eslint-disable-line

  return (
    <S.Wrapper>
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
          icon={<MdShoppingCart />}
          disabled={!!error || disabled}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
