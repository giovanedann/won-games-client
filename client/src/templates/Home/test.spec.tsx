import 'match-media-mock'
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

describe('<Home />', () => {
  beforeEach(() => {
    renderWithTheme(<Home {...props} />)
  })

  it('should render menu and footer', () => {
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render the right section headings', () => {
    const headings = ['news', 'most popular', 'upcoming', 'free games']

    headings.forEach((heading) => {
      const headingRegExp = new RegExp(heading, 'i')
      expect(
        screen.getByRole('heading', { level: 2, name: headingRegExp })
      ).toBeInTheDocument()
    })
  })

  it('should render sections elements', () => {
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    expect(screen.getAllByText(/population zero/i)).toHaveLength(20)

    expect(screen.getAllByText(/red dead redemption 2/i)).toHaveLength(3)
  })
})
