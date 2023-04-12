import { GetCategories } from 'graphql/generated/GetCategories'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { GET_CATEGORIES } from 'graphql/queries/categories'
import { GET_GAMES } from 'graphql/queries/games'
import { initializeApollo } from 'infra/apollo/client'
import { GetServerSidePropsContext } from 'next'
import GamesTemplate, { GameTemplateProps } from 'templates/Games'
import { parseQueryStringToWhereJson } from 'utils/filter'

export default function GamesPage(props: GameTemplateProps) {
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
    fields: [
      { label: 'Free', name: 0 },
      { label: 'Under $50', name: 50 },
      { label: 'Under $100', name: 100 },
      { label: 'Under $150', name: 150 },
      { label: 'Under $250', name: 250 },
      { label: 'Under $500', name: 500 }
    ]
  }

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: [
      { label: 'Windows', name: 'windows' },
      { label: 'Linux', name: 'linux' },
      { label: 'Mac OS', name: 'mac' }
    ]
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: [
      { label: 'Lowest to highest', name: 'price:asc' },
      { label: 'Highest to lowest', name: 'price:desc' }
    ]
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
