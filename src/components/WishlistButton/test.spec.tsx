import { screen, render } from 'utils/tests/render'
import WishlistButton from '.'
import {
  WishlistContextData,
  wishlistContextDefaultValues
} from 'contexts/wishlist'
import nextAuthReact, { SessionContextValue } from 'next-auth/react'
import userEvent from '@testing-library/user-event'

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

  it('should render the right text if game is on wishlist', () => {
    const wishlistProviderValues: WishlistContextData = {
      ...wishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" />, {
      wishlistProviderProps: wishlistProviderValues
    })

    expect(
      screen.getByRole('button', { name: /remove from wishlist/i })
    ).toBeInTheDocument()
  })

  it('should render nothing if user is not authenticated', () => {
    jest.spyOn(nextAuthReact, 'useSession').mockImplementationOnce(
      () =>
        ({
          data: null
        } as SessionContextValue)
    )

    const wishlistProviderValues: WishlistContextData = {
      ...wishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" />, {
      wishlistProviderProps: wishlistProviderValues
    })

    expect(
      screen.queryByRole('button', { name: /remove from wishlist/i })
    ).not.toBeInTheDocument()
  })

  it('should call removeFromWishlist context function if game is on wishlist', async () => {
    const user = userEvent.setup()
    const mockedRemoveFromWishlist = jest.fn()

    const wishlistProviderValues: WishlistContextData = {
      ...wishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: mockedRemoveFromWishlist
    }

    render(<WishlistButton id="1" />, {
      wishlistProviderProps: wishlistProviderValues
    })

    await user.click(
      screen.getByRole('button', { name: /remove from wishlist/i })
    )

    expect(mockedRemoveFromWishlist).toHaveBeenCalled()
    expect(mockedRemoveFromWishlist).toHaveBeenCalledTimes(1)
    expect(mockedRemoveFromWishlist).toHaveBeenCalledWith('1')
  })

  it('should call addToWishlist context function if game is on wishlist', async () => {
    const user = userEvent.setup()
    const mockedAddToWishlist = jest.fn()

    const wishlistProviderValues: WishlistContextData = {
      ...wishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: mockedAddToWishlist
    }

    render(<WishlistButton id="3" />, {
      wishlistProviderProps: wishlistProviderValues
    })

    await user.click(screen.getByRole('button', { name: /add to wishlist/i }))

    expect(mockedAddToWishlist).toHaveBeenCalled()
    expect(mockedAddToWishlist).toHaveBeenCalledTimes(1)
    expect(mockedAddToWishlist).toHaveBeenCalledWith('3')
  })
})
