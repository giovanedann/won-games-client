import Button, { ButtonProps } from 'components/Button'
import { useWishlist } from 'contexts/wishlist'
import { useSession } from 'next-auth/react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export type WishlistButtonProps = Pick<ButtonProps, 'size'> & {
  id: string
  hasText?: boolean
}

const ButtonIcon = ({ isFavorited }: { isFavorited: boolean }) => {
  if (isFavorited) {
    return <MdFavorite />
  }

  return <MdFavoriteBorder />
}

function WishlistButton({
  id,
  hasText = true,
  size = 'small'
}: WishlistButtonProps) {
  const { data } = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  if (!data) return null

  const buttonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  function handleWishlistButtonClick() {
    if (!isInWishlist(id)) {
      addToWishlist(id)
    } else {
      removeFromWishlist(id)
    }
  }

  return (
    <Button
      minimal
      size={size}
      icon={<ButtonIcon isFavorited={isInWishlist(id)} />}
      onClick={handleWishlistButtonClick}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
