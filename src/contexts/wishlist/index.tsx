import { GameCardProps } from 'components/GameCard'
import { ReactNode, createContext, useContext } from 'react'

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
  return (
    <WishlistContext.Provider value={wishlistContextDefaultValues}>
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
