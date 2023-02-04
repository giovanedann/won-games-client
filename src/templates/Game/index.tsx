import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import TextContent from 'components/TextContent'
import Base from 'templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
  coverImg: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
}

function Game({
  coverImg,
  gameInfo,
  gallery,
  description,
  details
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
    </Base>
  )
}

export default Game
