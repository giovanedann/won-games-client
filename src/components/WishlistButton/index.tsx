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
  const { isInWishlist } = useWishlist()

  const buttonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  if (!data) return null

  return (
    <Button
      minimal
      size={size}
      icon={<ButtonIcon isFavorited={isInWishlist(id)} />}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
