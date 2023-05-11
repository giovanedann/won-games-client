import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'
import { MdShoppingCart } from 'react-icons/md'

function PaymentForm() {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
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
