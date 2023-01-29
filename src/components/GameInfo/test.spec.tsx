import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import GameInfo from '.'

const props = {
  title: 'Hades',
  description: 'Hades description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render the game info', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(screen.getByRole('heading', { name: /hades/i })).toBeInTheDocument()
    expect(screen.getByText(/hades description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210,00/i)).toBeInTheDocument()
  })

  it('should render the action buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
