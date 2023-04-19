import LocalStorage from 'infra/cache/LocalStorage'
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
  useMemo
} from 'react'

const CART_KEY = 'cartItems'

export type CartContextData = {
  items: string[]
}

export const cartContextDefaultValues: CartContextData = {
  items: []
}

export const CartContext = createContext<CartContextData>(
  cartContextDefaultValues
)

export type CartProviderProps = {
  children: ReactNode
}

function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const localStorageGamesIds = LocalStorage.get(CART_KEY)

    if (localStorageGamesIds) {
      setItems(localStorageGamesIds)
    }
  }, [])

  const providerValues = useMemo(
    () => ({
      items
    }),
    [items]
  )

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
