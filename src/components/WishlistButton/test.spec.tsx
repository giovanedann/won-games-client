import { screen, render } from 'utils/tests/render'
import WishlistButton from '.'
import {
  WishlistContextData,
  wishlistContextDefaultValues
} from 'contexts/wishlist'

const validSessionMock = {
  data: {
    user: {
      email: 'valid@mail.com'
    }
  }
}

jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  useSession: () => validSessionMock
}))

describe('<WishlistButton />', () => {
  it('should render the right text if game is not on wishlist', () => {
    const wishlistProviderValues: WishlistContextData = {
      ...wishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" />, {
      wishlistProviderProps: wishlistProviderValues
    })

    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toBeInTheDocument()
  })
})
