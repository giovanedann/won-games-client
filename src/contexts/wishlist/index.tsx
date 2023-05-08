import { FetchResult, useMutation } from '@apollo/client'
import wishlistGamesAdapter from 'adapters/wishlist-games.adapter'
import { GameCardProps } from 'components/GameCard'
import { MutationCreateWishlist } from 'graphql/generated/MutationCreateWishlist'
import { MutationUpdateWishlist } from 'graphql/generated/MutationUpdateWishlist'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
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
  addToWishlist: (
    id: string
  ) => Promise<FetchResult<MutationUpdateWishlist | MutationCreateWishlist>>
  removeFromWishlist: (
    id: string
  ) => Promise<FetchResult<MutationUpdateWishlist>>
  loading: boolean
}

export const wishlistContextDefaultValues: WishlistContextData = {
  items: [],
  addToWishlist: () => new Promise((resolve) => resolve({})),
  isInWishlist: () => false,
  removeFromWishlist: () => new Promise((resolve) => resolve({})),
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  wishlistContextDefaultValues
)

type WishlistProviderProps = {
  children: ReactNode
}

function WishlistProvider({ children }: WishlistProviderProps) {
  const [currentUserWishlistId, setCurrentUserWishlistId] = useState<
    string | null
  >(null)

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

  // mutation to create the wishlist if it does not exist
  const [createWishlist, { loading: loadingWishlistCreation }] =
    useMutation<MutationCreateWishlist>(MUTATION_CREATE_WISHLIST, {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.games ?? [])
        setCurrentUserWishlistId(data.createWishlist?.wishlist?.id ?? null)
      }
    })

  // mutation to update the wishlist if the user already have one
  const [updateWishlist, { loading: loadingWishlistUpdate }] =
    useMutation<MutationUpdateWishlist>(MUTATION_UPDATE_WISHLIST, {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games ?? [])
      }
    })

  // useEffect to set the initial wishlist items and the current user wishlist id
  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games ?? [])
    setCurrentUserWishlistId(data?.wishlists[0]?.id ?? null)
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

  // memoized variable to store only the id of the games of the user wishlist
  const wishlistGamesIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems]
  )

  // memoized function to set a new game id on the user wishlist
  const addToWishlist = useCallback(
    (gameId: string) => {
      // if the currentUserWishlistId is null, means that the user does not have a wishlist, so a wishlist is created
      if (!currentUserWishlistId) {
        return createWishlist({
          variables: {
            input: { data: { games: [...wishlistGamesIds, gameId] } }
          }
        })
      }

      // if the currentUserWishlistId is not null, so, update the wishlist
      return updateWishlist({
        variables: {
          input: {
            where: { id: currentUserWishlistId },
            data: { games: [...wishlistGamesIds, gameId] }
          }
        }
      })
    },
    [updateWishlist, createWishlist, currentUserWishlistId, wishlistGamesIds]
  )

  // memoized function to remove a game from the user wishlist
  const removeFromWishlist = useCallback(
    (gameId: string) => {
      return updateWishlist({
        variables: {
          input: {
            where: { id: currentUserWishlistId },
            data: {
              games: wishlistGamesIds.filter(
                (wishlistGameId) => wishlistGameId !== gameId
              )
            }
          }
        }
      })
    },
    [updateWishlist, currentUserWishlistId, wishlistGamesIds]
  )

  // memoized value with the provider object value
  const wishlistProviderValue: WishlistContextData = useMemo(
    () => ({
      ...wishlistContextDefaultValues,
      items: wishlistGamesAdapter(wishlistItems),
      loading: loading || loadingWishlistCreation || loadingWishlistUpdate,
      isInWishlist,
      addToWishlist,
      removeFromWishlist
    }),
    [
      loading,
      wishlistItems,
      isInWishlist,
      addToWishlist,
      loadingWishlistCreation,
      loadingWishlistUpdate,
      removeFromWishlist
    ]
  )

  return (
    <WishlistContext.Provider value={wishlistProviderValue}>
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
