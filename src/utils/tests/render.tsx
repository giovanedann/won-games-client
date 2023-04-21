import { ReactElement } from 'react'
import * as ReactTestingLibrary from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import {
  CartContext,
  CartContextData,
  cartContextDefaultValues
} from 'contexts/cart'

import theme from 'styles/theme'

type CustomRenderProps = Omit<ReactTestingLibrary.RenderOptions, 'queries'> & {
  cartProviderProps?: CartContextData
}

function render(
  ui: ReactElement,
  {
    cartProviderProps = cartContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) {
  const renderResult = ReactTestingLibrary.render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {ui}
      </CartContext.Provider>
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
