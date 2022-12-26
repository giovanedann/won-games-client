import { screen } from '@testing-library/react'
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
})
