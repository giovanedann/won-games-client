import OrdersList, { OrdersListProps } from 'components/OrdersList'
import ordersListMock from 'components/OrdersList/data.mock'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoute from 'utils/protectedRoute'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  return {
    props: {
      items: ordersListMock,
      session
    }
  }
}
