import { ThemeProvider } from 'styled-components'
import { CartContext, cartContextDefaultValues } from 'contexts/cart'
import { WishlistContext, wishlistContextDefaultValues } from 'contexts/wishlist'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { SessionProvider } from 'next-auth/react'

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

const session = {
  data: {
    user: {
      email: 'valid@mail.com'
    }
  }
}

export const decorators = [
  (Story, context) => (
    <SessionProvider session={session}>
      <CartContext.Provider value={{
        ...cartContextDefaultValues,
        ...(context?.args?.cartContextValue || {}),
        ...context.args
      }}>
        <WishlistContext.Provider value={{
        ...wishlistContextDefaultValues,
        ...(context?.args?.wishlistContextValue || {}),
        ...context.args
        }}>
          <ThemeProvider theme={theme}>
            <GlobalStyles removeBg/>
            <Story />
          </ThemeProvider>
        </WishlistContext.Provider>
      </CartContext.Provider>
    </SessionProvider>
  ),
]
