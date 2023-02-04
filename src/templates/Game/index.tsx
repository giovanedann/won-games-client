import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Base from 'templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
  coverImg: string
  gameInfo: GameInfoProps
}

function Game({ coverImg, gameInfo }: GameTemplateProps) {
  return (
    <Base>
      <S.Cover src={coverImg} role="img" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
      </S.Main>
    </Base>
  )
}

export default Game
