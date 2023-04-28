import {
  ApolloClient,
  NormalizedCacheObject,
  from,
  HttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import merge from 'deepmerge'
import { onError } from '@apollo/client/link/error'
import { isEqual } from 'lodash'
import { useMemo } from 'react'
import apolloCache from './apolloCache'
import { Session } from 'next-auth'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let client: ApolloClient<NormalizedCacheObject>

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, location: ${locations}, path: ${path}`
      )
    })
  }

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext((_, { headers }) => {
    const authorization = session?.jwt ? `Bearer ${session?.jwt}` : ''

    return { headers: { ...headers, authorization } }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: apolloCache,
    link: from([errorLink, authLink.concat(httpLink)])
  })
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  const _client = client ?? createApolloClient(session)

  if (initialState) {
    const existingCache = _client.extract()

    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((destinationItem) =>
          sourceArray.every(
            (sourceItem) => !isEqual(destinationItem, sourceItem)
          )
        )
      ]
    })

    _client.cache.restore(data)
  }

  if (typeof window === 'undefined') return _client

  if (!client) client = _client

  return _client
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(pageProps: any, session?: Session) {
  const state = pageProps?.[APOLLO_STATE_PROP_NAME]

  const store = useMemo(
    () => initializeApollo(state, session),
    [state, session]
  )

  return store
}
