import { screen, render } from 'utils/tests/render'
import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the cart icon without quantity span if quantity is omitted or 0', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart icon/i)).toBeInTheDocument()
    expect(
      screen.queryByLabelText(/cart items quantity/i)
    ).not.toBeInTheDocument()
  })

  it('should render the cart item with quantity span if quantity is greater than 0', () => {
    render(<CartIcon quantity={12} />)

    expect(screen.getByLabelText(/shopping cart icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items quantity/i)).toBeInTheDocument()
    expect(screen.getByText(/12/i)).toBeInTheDocument()
  })
})
