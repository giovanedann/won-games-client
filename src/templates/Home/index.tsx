import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Container from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  newGamesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGamesTitle: string
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeGamesTitle: string
  freeHighlight: HighlightProps
}

function Home({
  banners,
  freeGames,
  freeHighlight,
  mostPopularGames,
  mostPopularHighlight,
  freeGamesTitle,
  mostPopularGamesTitle,
  newGamesTitle,
  upcomingGamesTitle,
  newGames,
  upcomingGames,
  upcomingHighlight
}: HomeTemplateProps) {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} />
      </S.SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        games={mostPopularGames}
        highlight={mostPopularHighlight}
      />

      <Showcase
        title={upcomingGamesTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={freeGamesTitle}
        games={freeGames}
        highlight={freeHighlight}
      />
    </Base>
  )
}

export default Home
