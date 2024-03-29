import { screen, render } from 'utils/tests/render'
import CartDropdown from '.'

import cartListMock from 'components/CartList/data.mock'
import { cartContextDefaultValues } from 'contexts/cart'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    render(<CartDropdown />, {
      cartProviderProps: {
        ...cartContextDefaultValues,
        items: cartListMock,
        itemsQuantity: cartListMock.length,
        totalPrice: '$430,00'
      }
    })

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    render(<CartDropdown />, {
      cartProviderProps: {
        ...cartContextDefaultValues,
        items: cartListMock,
        itemsQuantity: cartListMock.length,
        totalPrice: '$430,00'
      }
    })

    expect(screen.getByText('$430,00')).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock[0].title}`)).toBeInTheDocument()
  })
})
