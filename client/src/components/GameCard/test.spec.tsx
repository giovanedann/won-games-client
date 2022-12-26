import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithTheme from 'utils/tests/renderWithTheme'
import GameCard from '.'

const props = {
  title: 'Devil May Cry 5',
  developer: 'Capcom',
  img: 'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the right elements', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { level: 3, name: /devil may cry 5/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 4, name: /capcom/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/R\$ 235,00/i)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render the normal price without text decoration if no promotionalPrice', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(/R\$ 235,00/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render the normal price with a line through if promotionalPrice', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 120,00" />)

    expect(screen.getByText(/R\$ 235,00/i)).toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render the card with both prices', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 120,00" />)

    const fullPrice = screen.getByText(/R\$ 235,00/i)
    expect(fullPrice).toBeInTheDocument()
    expect(fullPrice).toHaveStyle({
      textDecoration: 'line-through'
    })

    const promotionalPrice = screen.getByText(/R\$ 235,00/i)
    expect(promotionalPrice).toBeInTheDocument()
  })

  it('should render a filled heart icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav function on heart icon click', async () => {
    const user = userEvent.setup()
    const favoriteHandler = jest.fn()

    renderWithTheme(<GameCard {...props} onFav={favoriteHandler} />)

    await user.click(screen.getByLabelText(/favorite button/i))

    expect(favoriteHandler).toBeCalled()
    expect(favoriteHandler).toBeCalledTimes(1)
  })
})
