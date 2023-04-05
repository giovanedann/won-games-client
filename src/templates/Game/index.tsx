import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import TextContent from 'components/TextContent'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
  coverImg: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle?: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle?: string
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
  recommendedTitle,
  upcomingTitle,
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
        </S.SectionGameDetails>
      </S.Main>

      <Showcase
        title={upcomingTitle ?? 'Upcoming games'}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={recommendedTitle ?? 'You may like these games'}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Game
