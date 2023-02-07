import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import TextContent from 'components/TextContent'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'
import Divider from 'components/Divider'

export type GameTemplateProps = {
  coverImg: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

function Game({
  coverImg,
  gameInfo,
  gallery,
  description,
  details,
  recommendedGames,
  upcomingGames,
  upcomingHighlight
}: GameTemplateProps) {
  return (
    <Base>
      <S.Cover src={coverImg} role="img" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        {!!gallery && (
          <S.SectionGallery>
            <Gallery items={gallery} />
          </S.SectionGallery>
        )}

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>
      </S.Main>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </Base>
  )
}

export default Game
