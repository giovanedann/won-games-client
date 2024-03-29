import { screen, render } from 'utils/tests/render'

import Home from '.'
import bannersMock from 'components/BannerSlider/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  newGamesTitle: 'New games',
  mostPopularHighlight: highlightMock,
  mostPopularGamesTitle: 'Most popular',
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingGamesTitle: 'Upcoming games',
  upcomingHighlight: highlightMock,
  freeGamesTitle: 'Free games',
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="showcase-mock"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="banner-slider-mock"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the showcases and banner slider', () => {
    render(<Home {...props} />)
    expect(screen.getByTestId('banner-slider-mock')).toBeInTheDocument()
    expect(screen.getAllByTestId('showcase-mock')).toHaveLength(4)
  })
})
