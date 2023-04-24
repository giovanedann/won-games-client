import NextAuth from 'next-auth' // eslint-disable-line

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id: string
    jwt: string
  }

  interface User {
    id: string
    jwt: string
    username: string
    email: string
  }
}
