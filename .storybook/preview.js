import { ThemeProvider } from 'styled-components'
import { CartContext, cartContextDefaultValues } from 'contexts/cart'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <CartContext.Provider value={{
      ...cartContextDefaultValues,
      ...(context?.args?.cartContextValue || {}),
      ...context.args
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg/>
        <Story />
      </ThemeProvider>
    </CartContext.Provider>
  ),
]
