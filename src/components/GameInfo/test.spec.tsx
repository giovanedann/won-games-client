import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import GameInfo from '.'
import gameInfoMock from './data.mock'

describe('<GameInfo />', () => {
  it('should render the game info', () => {
    renderWithTheme(<GameInfo {...gameInfoMock} />)

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
    renderWithTheme(<GameInfo {...gameInfoMock} />)

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
