import CardsList, { CardsListProps } from 'components/CardsList'
import paymentOptionsMock from 'components/PaymentOptions/data.mock'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoute from 'utils/protectedRoute'

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  return {
    props: {
      session,
      cards: paymentOptionsMock
    }
  }
}
