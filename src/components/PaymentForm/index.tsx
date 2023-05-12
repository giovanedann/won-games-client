import { useState } from 'react'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { CardElement } from '@stripe/react-stripe-js'

import { MdShoppingCart, MdErrorOutline } from 'react-icons/md'

import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'

function PaymentForm() {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState<boolean>(true)

  function handleChange(event: StripeCardElementChangeEvent) {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : null)
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <CardElement
          options={{
            hidePostalCode: true,
            style: { base: { fontSize: '1.2rem' } }
          }}
          onChange={handleChange}
        />

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
