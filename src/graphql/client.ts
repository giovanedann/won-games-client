import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  from,
  HttpLink
} from '@apollo/client'
import merge from 'deepmerge'
import { onError } from '@apollo/client/link/error'
import { isEqual } from 'lodash'
import { useMemo } from 'react'

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

const httpLink = new HttpLink({
  uri: 'http://localhost:1337/graphql'
})

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink])
  })
}

export function initializeApollo(initialState = null) {
  const _client = client ?? createApolloClient()

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

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(pageProps: any) {
  const state = pageProps?.[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

client = createApolloClient()

export default client
