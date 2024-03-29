import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export default async function protectedRoute(
  context: GetServerSidePropsContext
) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, {
      Location: `/sign-in?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
  }

  return session
}
