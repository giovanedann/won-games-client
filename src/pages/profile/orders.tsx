import ordersAdapter from 'adapters/orders.adapter'
import OrdersList, { OrdersListProps } from 'components/OrdersList'
import { GetOrders, GetOrdersVariables } from 'graphql/generated/GetOrders'
import { GET_ORDERS } from 'graphql/queries/orders'
import { initializeApollo } from 'infra/apollo/client'
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

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetOrders, GetOrdersVariables>({
    query: GET_ORDERS,
    variables: { identifier: session?.id },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      items: ordersAdapter(data.orders),
      session
    }
  }
}
