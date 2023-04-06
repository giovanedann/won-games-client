import Base from 'templates/Base'
import { MdKeyboardArrowDown } from 'react-icons/md'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'

import * as S from './styles'
import { useQuery } from '@apollo/client'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { GET_GAMES } from 'graphql/queries/games'
import getImageUrl from 'utils/getImageUrl'
import formatPrice from 'utils/formatPrice'

export type GameTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

function Games({ filterItems }: GameTemplateProps) {
  const { data, fetchMore } = useQuery<GetGames, GetGamesVariables>(GET_GAMES, {
    variables: { limit: 15 }
  })

  function handleFilter() {
    return
  }

  function handleShowMore() {
    fetchMore({ variables: { start: data?.games.length, limit: 15 } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
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

          <S.ShowMore role="button" onClick={handleShowMore}>
            <S.ShowMoreText>Show more</S.ShowMoreText>
            <MdKeyboardArrowDown size={35} />
          </S.ShowMore>
        </S.GamesSection>
      </S.Main>
    </Base>
  )
}

export default Games
