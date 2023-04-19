import { renderHook } from '@testing-library/react-hooks'
import LocalStorage from 'infra/cache/LocalStorage'

import { useCart, CartProvider } from '.'
import { ReactNode } from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { cartItems, gamesMock } from './mocks'

function hookWrapper({ children }: { children: ReactNode }) {
  return (
    <MockedProvider mocks={[gamesMock]}>
      <CartProvider>{children}</CartProvider>
    </MockedProvider>
  )
}

describe('Cart context', () => {
  it('should update the initial state with database data according to localStorage', async () => {
    const items = ['1', '2']

    LocalStorage.set('cartItems', items)

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper: hookWrapper
    })

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.itemsQuantity).toEqual(2)
    expect(result.current.totalPrice).toBe('$30.50')
  })
})
