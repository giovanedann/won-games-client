import ProfileForm from 'components/ProfileForm'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoute from 'utils/protectedRoute'

export default function Me() {
  return (
    <Profile>
      <ProfileForm />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoute(context)

  return {
    props: { session }
  }
}
