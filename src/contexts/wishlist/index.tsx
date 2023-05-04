import wishlistGamesAdapter from 'adapters/wishlist-games.adapter'
import { GameCardProps } from 'components/GameCard'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import { useQueryWishlist } from 'hooks/useQueryWishlist'
import { useSession } from 'next-auth/react'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

const wishlistContextDefaultValues: WishlistContextData = {
  items: [],
  addToWishlist: () => null,
  isInWishlist: () => false,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  wishlistContextDefaultValues
)

type WishlistProviderProps = {
  children: ReactNode
}

function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const session = useSession()

  // hook to load the games
  const { data, loading } = useQueryWishlist({
    skip: !session.data?.user?.email,
    context: { session },
    variables: {
      identifier: session.data?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games ?? [])
  }, [data])

  // memoized function to check if determined game is on wishlist items
  const isInWishlist = useCallback(
    (id: string) => {
      const isItemInWishlist = wishlistItems.find((game) => game.id === id)

      if (!isItemInWishlist) return false
      return true
    },
    [wishlistItems]
  )

  const wishlistProviderValue: WishlistContextData = useMemo(
    () => ({
      ...wishlistContextDefaultValues,
      items: wishlistGamesAdapter(wishlistItems),
      loading,
      isInWishlist
    }),
    [loading, wishlistItems, isInWishlist]
  )

  return (
    <WishlistContext.Provider value={wishlistProviderValue}>
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
