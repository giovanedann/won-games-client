import { screen, render } from 'utils/tests/render'

import GameDetails from '.'

import gameDetailsMock from './data.mock'

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    render(<GameDetails {...gameDetailsMock} />)

    expect(screen.getByText(/game details/i)).toBeInTheDocument()
  })

  it('should render the blocks', () => {
    render(<GameDetails {...gameDetailsMock} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...gameDetailsMock} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 10+ rating when BR10', () => {
    render(<GameDetails {...gameDetailsMock} rating="BR10" />)

    expect(screen.getByText(/10\+/i)).toBeInTheDocument()
  })

  it('should render 12+ rating when BR12', () => {
    render(<GameDetails {...gameDetailsMock} rating="BR12" />)

    expect(screen.getByText(/12\+/i)).toBeInTheDocument()
  })

  it('should render 14+ rating when BR14', () => {
    render(<GameDetails {...gameDetailsMock} rating="BR14" />)

    expect(screen.getByText(/14\+/i)).toBeInTheDocument()
  })

  it('should render 16+ rating when BR16', () => {
    render(<GameDetails {...gameDetailsMock} rating="BR16" />)

    expect(screen.getByText(/16\+/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...gameDetailsMock} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the platform icons', () => {
    render(<GameDetails {...gameDetailsMock} />)

    expect(screen.getByTitle(/linux/i)).toBeInTheDocument()
    expect(screen.getByTitle(/windows/i)).toBeInTheDocument()
    expect(screen.getByTitle(/mac/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<GameDetails {...gameDetailsMock} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...gameDetailsMock} />)

    expect(screen.getByText('Role-playing / Action')).toBeInTheDocument()
  })
})
