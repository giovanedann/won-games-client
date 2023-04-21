import { screen, render } from 'utils/tests/render'

import GameInfo from '.'
import gameInfoMock from './data.mock'

describe('<GameInfo />', () => {
  it('should render the game info', () => {
    render(<GameInfo {...gameInfoMock} />)

    expect(
      screen.getByRole('heading', { name: /borderlands 3/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Control your fleet and build an armada across more than 30 single-player missions/i
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/\$215\.00/i)).toBeInTheDocument()
  })

  it('should render the action buttons', () => {
    render(<GameInfo {...gameInfoMock} />)

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
