import { ReactElement } from 'react'
import * as ReactTestingLibrary from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import {
  CartContext,
  CartContextData,
  cartContextDefaultValues
} from 'contexts/cart'

import {
  WishlistContext,
  WishlistContextData,
  wishlistContextDefaultValues
} from 'contexts/wishlist'

import theme from 'styles/theme'

type CustomRenderProps = Omit<ReactTestingLibrary.RenderOptions, 'queries'> & {
  cartProviderProps?: CartContextData
  wishlistProviderProps?: WishlistContextData
}

function render(
  ui: ReactElement,
  {
    cartProviderProps = cartContextDefaultValues,
    wishlistProviderProps = wishlistContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) {
  const renderResult = ReactTestingLibrary.render(
    <ThemeProvider theme={theme}>
      <WishlistContext.Provider value={wishlistProviderProps}>
        <CartContext.Provider value={cartProviderProps}>
          {ui}
        </CartContext.Provider>
      </WishlistContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

  return {
    ...renderResult,
    rerender: (ui: ReactElement) => {
      return render(ui, { container: renderResult.container, ...renderOptions })
    }
  }
}

export * from '@testing-library/react'
export { render }
