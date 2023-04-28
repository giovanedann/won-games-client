import ProfileForm, { ProfileFormProps } from 'components/ProfileForm'
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE } from 'graphql/queries/profile'
import { initializeApollo } from 'infra/apollo/client'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoute from 'utils/protectedRoute'

export default function Me({ email, username }: ProfileFormProps) {
  return (
    <Profile>
      <ProfileForm username={username} email={email} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
