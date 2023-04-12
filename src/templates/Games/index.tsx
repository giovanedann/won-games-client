import Base from 'templates/Base'
import { MdKeyboardArrowDown } from 'react-icons/md'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'

import * as S from './styles'
import { useQueryGames } from 'graphql/queries/games'
import getImageUrl from 'utils/getImageUrl'
import formatPrice from 'utils/formatPrice'
import useIsMounted from 'hooks/useIsMounted'
import {
  parseQueryStringToFilter,
  parseQueryStringToWhereJson
} from 'utils/filter'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import Empty from 'components/Empty'

export type GameTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

function Games({ filterItems }: GameTemplateProps) {
  const isComponentMounted = useIsMounted()
  const { push, query } = useRouter()

  const { data, fetchMore, loading } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhereJson({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <h1 style={{ color: '#fff' }}>Loading...</h1>

  const { games, gamesConnection } = data

  const hasMoreGamesToShow =
    games.length < (gamesConnection?.values?.length ?? 0)

  function handleFilter(items: ParsedUrlQueryInput) {
    push({ pathname: '/games', query: items })
    return
  }

  function handleShowMore() {
    fetchMore({ variables: { start: data?.games.length, limit: 15 } })
  }

  if (!isComponentMounted) return null

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        {data?.games?.length && (
          <S.GamesSection>
            <Grid>
              {data?.games?.map((game) => (
                <GameCard
                  key={game.slug + game.developers[0].name}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={getImageUrl(
                    game.cover?.url ||
                      '/uploads/No_image_available_38adfae762.png'
                  )}
                  price={formatPrice(game.price)}
                />
              ))}
            </Grid>

            <S.ShowMoreContainer>
              {loading && (
                <S.Loader
                  src="/img/animated-dots.svg"
                  alt="loading more games..."
                />
              )}
              {!loading && hasMoreGamesToShow && (
                <S.ShowMoreButton role="button" onClick={handleShowMore}>
                  <p>Show more</p>
                  <MdKeyboardArrowDown size={35} />
                </S.ShowMoreButton>
              )}
            </S.ShowMoreContainer>
          </S.GamesSection>
        )}

        {!data?.games?.length && (
          <Empty
            title="Oops :("
            description="We didn't find any games that matches this filter"
            hasLink
          />
        )}
      </S.Main>
    </Base>
  )
}

export default Games
