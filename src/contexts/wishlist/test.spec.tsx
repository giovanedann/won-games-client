import { MockedProvider } from '@apollo/client/testing'
import {
  renderHook,
  RenderResult,
  WaitForNextUpdate
} from '@testing-library/react-hooks'

import { wishlistMock, wishlistItems } from './mocks'
import { useWishlist, WishlistContextData, WishlistProvider } from '.'
import { ReactNode } from 'react'

function hookWrapper({ children }: { children: ReactNode }) {
  return (
    <MockedProvider mocks={[wishlistMock]}>
      <WishlistProvider>{children}</WishlistProvider>
    </MockedProvider>
  )
}

type RenderHookWithProviderResult = {
  result: RenderResult<WishlistContextData>
  waitForNextUpdate: WaitForNextUpdate
}

function renderHookWithProvider(): RenderHookWithProviderResult {
  const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
    wrapper: hookWrapper
  })

  return { result, waitForNextUpdate }
}

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
    const { result, waitForNextUpdate } = renderHookWithProvider()

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(wishlistItems)
  })

  it('should update loading status after loading the games', async () => {
    const { result, waitForNextUpdate } = renderHookWithProvider()

    expect(result.current.loading).toBeTruthy()

    await waitForNextUpdate()

    expect(result.current.loading).toBeFalsy()
  })
})
