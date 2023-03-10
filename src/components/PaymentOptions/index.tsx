import Image from 'next/image'
import { MdAdd, MdShoppingCart } from 'react-icons/md'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'
import { useState } from 'react'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <S.CardImageBox>
                  <Image src={card.img} alt={card.flag} fill />
                </S.CardImageBox>
                <S.RadioLabel htmlFor={card.number}>{card.number}</S.RadioLabel>
              </S.CardInfo>

              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setIsChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <MdAdd size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>

      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<MdShoppingCart />}
          onClick={handlePayment}
          disabled={!isChecked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
