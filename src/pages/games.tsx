import { GetCategories } from 'graphql/generated/GetCategories'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { GET_CATEGORIES } from 'graphql/queries/categories'
import { GET_GAMES } from 'graphql/queries/games'
import useIsMounted from 'hooks/useIsMounted'
import { initializeApollo } from 'infra/apollo/client'
import { GetServerSidePropsContext } from 'next'
import GamesTemplate, { GameTemplateProps } from 'templates/Games'
import { parseQueryStringToWhereJson } from 'utils/filter'
import { platformFields, priceFields, sortFields } from 'utils/filter/fields'

export default function GamesPage(props: GameTemplateProps) {
  const isComponentMounted = useIsMounted()

  if (!isComponentMounted) return null

  return <GamesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetCategories>({
    query: GET_CATEGORIES
  })

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields
  }

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformFields
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: data.categories
      .filter((category) => !!category.name && !!category.slug)
      .map((category) => ({
        label: category.name,
        name: category.slug
      }))
  }

  const filters = [filterSort, filterPrice, filterCategories, filterPlatforms]

  await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhereJson({
        queryString: query,
        filterItems: filters
      }),
      sort: query?.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filters
    }
  }
}
