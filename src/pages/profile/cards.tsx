import CardsList, { CardsListProps } from 'components/CardsList'
import paymentOptionsMock from 'components/PaymentOptions/data.mock'
import Profile from 'templates/Profile'

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      cards: paymentOptionsMock
    }
  }
}
