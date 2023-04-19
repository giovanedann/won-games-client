import { WaitForNextUpdate, renderHook } from '@testing-library/react-hooks'
import LocalStorage from 'infra/cache/LocalStorage'

import { useCart, CartProvider, CartContextData } from '.'
import { ReactNode } from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { cartItems, gamesMock } from './mocks'
import { RenderResult } from '@testing-library/react-hooks'

function hookWrapper({ children }: { children: ReactNode }) {
  return (
    <MockedProvider mocks={[gamesMock]}>
      <CartProvider>{children}</CartProvider>
    </MockedProvider>
  )
}

type RenderHookWithProviderResult = {
  result: RenderResult<CartContextData>
  waitForNextUpdate: WaitForNextUpdate
}

function renderHookWithProvider(): RenderHookWithProviderResult {
  const { result, waitForNextUpdate } = renderHook(() => useCart(), {
    wrapper: hookWrapper
  })

  return { result, waitForNextUpdate }
}

describe('Cart context', () => {
  beforeEach(() => window.localStorage.clear())

  it('should update the initial state with database data according to localStorage', async () => {
    const items = ['1', '2']

    LocalStorage.set('cartItems', items)

    const { result, waitForNextUpdate } = renderHookWithProvider()

    expect(result.current.loading).toBeTruthy()

    await waitForNextUpdate()

    expect(result.current.loading).toBeFalsy()
    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.itemsQuantity).toEqual(2)
    expect(result.current.totalPrice).toBe('$30.50')
  })

  it('should return true/false correctly if item is in cart', async () => {
    const items = ['1', '2']

    LocalStorage.set('cartItems', items)

    const { result, waitForNextUpdate } = renderHookWithProvider()

    await waitForNextUpdate()

    expect(result.current.isItemInCart('3')).toBeFalsy()
    expect(result.current.isItemInCart('2')).toBeTruthy()
    expect(result.current.isItemInCart('1')).toBeTruthy()
  })
})
