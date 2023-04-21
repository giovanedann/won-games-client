import { screen, render } from 'utils/tests/render'
import CartButton from '.'
import { CartContextData, cartContextDefaultValues } from 'contexts/cart'
import userEvent from '@testing-library/user-event'

describe('<CartButton />', () => {
  it('should call addToCart if item is not in cart', async () => {
    const user = userEvent.setup()
    const addToCart = jest.fn()

    const cartProviderProps: CartContextData = {
      ...cartContextDefaultValues,
      isItemInCart: () => false,
      addToCart
    }

    render(<CartButton id="12345" />, { cartProviderProps })

    expect(screen.getByTitle(/add item to cart/i)).toBeInTheDocument()
    await user.click(screen.getByTitle(/add item to cart/i))

    expect(addToCart).toHaveBeenCalled()
    expect(addToCart).toHaveBeenCalledTimes(1)
  })

  it('should call removeItemFromCart if item is in cart', async () => {
    const user = userEvent.setup()
    const removeFromCart = jest.fn()

    const cartProviderProps: CartContextData = {
      ...cartContextDefaultValues,
      isItemInCart: () => true,
      removeFromCart
    }

    render(<CartButton id="12345" />, { cartProviderProps })

    expect(screen.getByTitle(/remove item from cart/i)).toBeInTheDocument()
    await user.click(screen.getByTitle(/remove item from cart/i))

    expect(removeFromCart).toHaveBeenCalled()
    expect(removeFromCart).toHaveBeenCalledTimes(1)
  })
})
