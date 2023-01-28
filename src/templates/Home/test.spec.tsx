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

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="menu-mock"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <footer data-testid="footer-mock"></footer>
    }
  }
})

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
  beforeEach(() => {
    renderWithTheme(<Home {...props} />)
  })

  it('should render the elements', () => {
    expect(screen.getByTestId('menu-mock')).toBeInTheDocument()
    expect(screen.getByTestId('banner-slider-mock')).toBeInTheDocument()
    expect(screen.getAllByTestId('showcase-mock')).toHaveLength(5)
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument()
  })
})
