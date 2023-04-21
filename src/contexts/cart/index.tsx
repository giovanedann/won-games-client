import cartAdapter from 'adapters/cart.adapter'
import { useQueryGames } from 'graphql/queries/games'
import LocalStorage from 'infra/cache/LocalStorage'
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useCallback
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
  isItemInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const cartContextDefaultValues: CartContextData = {
  items: [],
  itemsQuantity: 0,
  totalPrice: formatPrice(0),
  clearCart: () => null,
  addToCart: () => null,
  isItemInCart: () => false,
  loading: false,
  removeFromCart: () => null
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
  const { data, loading } = useQueryGames({
    skip: !items.length,
    variables: {
      where: {
        id: items
      }
    }
  })

  // memoized value to calculate the total price of the items on cart
  const totalPrice = useMemo(() => {
    return data?.games.reduce((total, game) => total + game.price, 0)
  }, [data])

  // memoized function to verify if the game is already in cart
  const isItemInCart = useCallback(
    (id: string) => {
      return items.includes(id)
    },
    [items]
  )

  const addToCart = useCallback((id: string) => {
    setItems((prev) => {
      // create the new updated array with unique values
      const updatedItems = Array.from(new Set([...prev, id]))
      // save the updated cart on local storage
      LocalStorage.set(CART_KEY, updatedItems)
      // update the state with the updated array
      return updatedItems
    })
  }, [])

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => {
      // remove the respective id from the cart items array
      const updatedItems = prev.filter((gameId) => gameId !== id)
      // save the updated cart on local storage
      LocalStorage.set(CART_KEY, updatedItems)
      // update the state with the updated array
      return updatedItems
    })
  }, [])

  const clearCart = useCallback(() => {
    LocalStorage.set(CART_KEY, [])
    setItems([])
  }, [])

  // memoized value to store the context data passed to the provider
  const providerValues: CartContextData = useMemo(
    () => ({
      items: cartAdapter(data?.games),
      itemsQuantity: items.length,
      totalPrice: formatPrice(totalPrice ?? 0),
      loading,
      isItemInCart,
      addToCart,
      clearCart,
      removeFromCart
    }),
    [
      data,
      totalPrice,
      items,
      loading,
      addToCart,
      isItemInCart,
      clearCart,
      removeFromCart
    ]
  )

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
