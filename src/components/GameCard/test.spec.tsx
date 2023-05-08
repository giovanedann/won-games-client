import 'session.mock'
import { screen, render } from 'utils/tests/render'
import userEvent from '@testing-library/user-event'

import GameCard from '.'

const props = {
  id: '123',
  slug: 'devil-may-cry-5',
  title: 'Devil May Cry 5',
  developer: 'Capcom',
  img: 'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the right elements', () => {
    render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { level: 3, name: /devil may cry 5/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 4, name: /capcom/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/R\$ 235,00/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `game/${props.slug}`
    )

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/favorite button/i)).toBeInTheDocument()
  })

  it('should render the normal price without text decoration if no promotionalPrice', () => {
    render(<GameCard {...props} />)

    expect(screen.getByText(/R\$ 235,00/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render the normal price with a line through if promotionalPrice', () => {
    render(<GameCard {...props} promotionalPrice="R$ 120,00" />)

    expect(screen.getByText(/R\$ 235,00/i)).toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render the card with both prices', () => {
    render(<GameCard {...props} promotionalPrice="R$ 120,00" />)

    const fullPrice = screen.getByText(/R\$ 235,00/i)
    expect(fullPrice).toBeInTheDocument()
    expect(fullPrice).toHaveStyle({
      textDecoration: 'line-through'
    })

    const promotionalPrice = screen.getByText(/R\$ 235,00/i)
    expect(promotionalPrice).toBeInTheDocument()
  })

  it('should render a ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="Ribbon"
        ribbonColor="primary"
        ribbonSize="small"
      />
    )

    expect(screen.getByText(/ribbon/i)).toBeInTheDocument()
  })
})
