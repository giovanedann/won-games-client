import { screen, render } from 'utils/tests/render'

import galleryMock from 'components/Gallery/data.mock'
import gameInfoMock from 'components/GameInfo/data.mock'
import gameDetailsMock from 'components/GameDetails/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

import Game, { GameTemplateProps } from '.'
import { GameDetailsProps } from 'components/GameDetails'

const props: GameTemplateProps = {
  coverImg: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Game />', () => {
  it('should render the template with components', () => {
    render(<Game {...props} />)
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    render(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    render(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    render(<Game {...props} />)

    const cover = screen.getByRole('img', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
