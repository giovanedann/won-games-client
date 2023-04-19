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
import formatPrice from 'utils/formatPrice'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  itemsQuantity: number
  totalPrice: string
}

export const cartContextDefaultValues: CartContextData = {
  items: [],
  itemsQuantity: 0,
  totalPrice: formatPrice(0)
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

  const totalPrice = useMemo(() => {
    return data?.games.reduce((total, game) => total + game.price, 0)
  }, [data])

  // memoized value to store the context data passed to the provider
  const providerValues: CartContextData = useMemo(
    () => ({
      items: cartAdapter(data?.games),
      itemsQuantity: items.length,
      totalPrice: formatPrice(totalPrice ?? 0)
    }),
    [data, totalPrice, items]
  )

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
