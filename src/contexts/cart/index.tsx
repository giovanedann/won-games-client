import cartAdapter from 'adapters/cart.adapter'
import { useQueryGames } from 'graphql/queries/games'
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

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
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
  // state to store the games ids
  const [items, setItems] = useState<string[]>([])

  // useEffect to load the local storage games ids
  useEffect(() => {
    const localStorageGamesIds = LocalStorage.get(CART_KEY)

    if (localStorageGamesIds) {
      setItems(localStorageGamesIds)
    }
  }, [])

  // request to query the game data from, where the ids are included in items array
  const { data } = useQueryGames({
    skip: !items.length,
    variables: {
      where: {
        id: items
      }
    }
  })

  // memoized value to store the context data passed to the provider
  const providerValues: CartContextData = useMemo(
    () => ({
      items: cartAdapter(data?.games)
    }),
    [data]
  )

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
