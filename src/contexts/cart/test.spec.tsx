import { renderHook } from '@testing-library/react'
import LocalStorage from 'infra/cache/LocalStorage'

import { useCart, CartProvider } from '.'

describe('Cart context', () => {
  it('should set the Provider items as the local storage items if they exist', () => {
    const items = ['1', '2', '3']

    LocalStorage.set('cartItems', items)

    const { result } = renderHook(() => useCart(), { wrapper: CartProvider })

    expect(result.current.items).toStrictEqual(items)
  })
})
