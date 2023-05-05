/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockedProvider } from '@apollo/client/testing'

import * as mocks from './mocks'
import { useWishlist, WishlistProvider } from '.'
import { ReactNode } from 'react'
import { act, waitFor } from 'utils/tests/render'
import { renderHook } from '@testing-library/react-hooks'

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
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return the wishlist items', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[mocks.queryWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(mocks.queryWishlistItems)
  })

  it('should update loading status after loading the games', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[mocks.queryWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    expect(result.current.loading).toBeTruthy()

    await waitForNextUpdate()

    expect(result.current.loading).toBeFalsy()
  })

  it('should check if game is on wishlist', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[mocks.queryWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.isInWishlist('1')).toBeTruthy()
    expect(result.current.isInWishlist('2')).toBeTruthy()
    expect(result.current.isInWishlist('3')).toBeFalsy()
  })

  it('should create a new wishlist if the user does not have one', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[mocks.createWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    act(() => {
      result.current.addToWishlist('3')
    })

    await waitForNextUpdate()

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(mocks.createWishlistItem)
    })
  })

  it('should update the user wishlist', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider
        mocks={[mocks.queryWishlistMock, mocks.updateWishlistMock]}
      >
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    act(() => {
      result.current.addToWishlist('3')
    })

    await waitForNextUpdate()

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(mocks.updateWishlistItems)
    })
  })
})
