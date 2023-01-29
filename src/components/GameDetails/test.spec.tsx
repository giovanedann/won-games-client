import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import GameDetails, { Platform } from '.'

const platforms: Platform[] = ['windows', 'linux', 'mac']

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDetails platforms={platforms} />)

    expect(screen.getByText(/game details/i)).toBeInTheDocument()
  })

  it('should render the platform icons', () => {
    renderWithTheme(<GameDetails platforms={platforms} />)

    expect(screen.getByTitle(/linux/i)).toBeInTheDocument()
    expect(screen.getByTitle(/windows/i)).toBeInTheDocument()
    expect(screen.getByTitle(/mac/i)).toBeInTheDocument()
  })
})
