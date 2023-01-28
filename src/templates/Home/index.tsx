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
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

function Home({
  banners,
  freeGames,
  freeHighlight,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} />
      </S.SectionNews>

      <Showcase
        title="Most popular"
        games={mostPopularGames}
        highlight={mostPopularHighlight}
      />

      <S.SectionUpcoming>
        <Showcase title="Upcoming" games={upcomingGames} />
        <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
      </S.SectionUpcoming>

      <Showcase
        title="Free Games"
        games={freeGames}
        highlight={freeHighlight}
      />
    </Base>
  )
}

export default Home
