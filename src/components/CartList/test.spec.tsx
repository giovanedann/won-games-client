import { screen, render } from 'utils/tests/render'

import CartList from '.'
import cartListMock from './data.mock'
import { CartContextData, cartContextDefaultValues } from 'contexts/cart'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps: CartContextData = {
      ...cartContextDefaultValues,
      items: cartListMock,
      totalPrice: 'R$ 430,00'
    }

    render(<CartList />, {
      cartProviderProps
    })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 430,00')).toHaveStyle({ color: '#F231A5' })
  })

  it('should render the button', () => {
    const cartProviderProps: CartContextData = {
      ...cartContextDefaultValues,
      items: cartListMock
    }

    render(<CartList hasButton />, {
      cartProviderProps
    })

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render <Empty /> if there are no games in cart', () => {
    render(<CartList hasButton />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })

  it('should render the loader', () => {
    const cartProviderProps: CartContextData = {
      ...cartContextDefaultValues,
      loading: true
    }

    render(<CartList hasButton />, {
      cartProviderProps
    })

    expect(screen.getByTitle(/loading\.../i)).toBeInTheDocument()
  })
})
