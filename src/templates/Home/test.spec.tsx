import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Home from '.'
import bannersMock from 'components/BannerSlider/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

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
    renderWithTheme(<Home {...props} />)
    expect(screen.getByTestId('banner-slider-mock')).toBeInTheDocument()
    expect(screen.getAllByTestId('showcase-mock')).toHaveLength(5)
  })
})
