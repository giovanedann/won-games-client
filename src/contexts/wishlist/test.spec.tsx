import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'

import { wishlistMock, wishlistItems } from './mocks'
import { useWishlist, WishlistProvider } from '.'
import { ReactNode } from 'react'

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

describe('useWishlist', () => {
  it('should return the wishlist items', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <MockedProvider mocks={[wishlistMock]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )
    }

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(wishlistItems)
  })
})
