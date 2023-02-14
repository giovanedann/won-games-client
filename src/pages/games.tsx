import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import gameCardSliderMock from 'components/GameCardSlider/data.mock'
import GamesTemplate, { GameTemplateProps } from 'templates/Games'

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gameCardSliderMock,
      filterItems: exploreSidebarMocks
    }
  }
}
