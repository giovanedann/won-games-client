import { screen } from '@testing-library/react'
import CartDropdown from '.'
import renderWithTheme from 'utils/tests/renderWithTheme'
import cartListMock from 'components/CartList/data.mock'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={cartListMock} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={cartListMock} total="R$ 300,00" />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock[0].title}`)).toBeInTheDocument()
  })
})
