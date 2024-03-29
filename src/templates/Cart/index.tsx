import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { MdInfo } from 'react-icons/md'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Container from 'components/Container'
import Divider from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList from 'components/CartList'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'
import PaymentForm from 'components/PaymentForm'
import { Session } from 'next-auth'

export type CartProps = {
  session: Session
  recommendedGames: GameCardProps[]
  recommendedTitle?: string
  recommendedHighlight: HighlightProps
}

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle,
  session
}: CartProps) => {
  const { data } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!data) {
      router.reload()
    }
  }, [data]) // eslint-disable-line

  if (!data) {
    return null
  }

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>

        <S.Text>
          <MdInfo size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle ?? 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
