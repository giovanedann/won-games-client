import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

function Showcase({ games, highlight, title }: ShowcaseProps) {
  return (
    <S.Wrapper data-cy={title?.toLowerCase() || 'showcase'}>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}

      {!!games && <GameCardSlider items={games} />}
    </S.Wrapper>
  )
}

export default Showcase
