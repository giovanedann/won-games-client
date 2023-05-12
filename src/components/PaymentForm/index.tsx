import { MdShoppingCart } from 'react-icons/md'
import { CardElement } from '@stripe/react-stripe-js'

import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'

function PaymentForm() {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <CardElement options={{ hidePostalCode: true }} />
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<MdShoppingCart />}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
