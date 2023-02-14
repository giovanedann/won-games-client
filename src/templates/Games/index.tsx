import Base from 'templates/Base'
import { MdKeyboardArrowDown } from 'react-icons/md'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'

import * as S from './styles'

export type GameTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

function Games({ filterItems, games }: GameTemplateProps) {
  function handleFilter() {
    return
  }

  function handleShowMore() {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <S.GamesSection>
          <Grid>
            {games?.map((game) => (
              <GameCard key={game.title + game.developer} {...game} />
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
