import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'
import { useWishlist } from 'contexts/wishlist'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export type WishlistButtonProps = Pick<ButtonProps, 'size'> & {
  id: string
  hasText?: boolean
}

const ButtonIcon = ({
  isFavorited,
  isLoading
}: {
  isFavorited: boolean
  isLoading: boolean
}) => {
  if (isLoading) {
    return <Spinner />
  }

  if (isFavorited) {
    return <MdFavorite />
  }

  return <MdFavoriteBorder />
}

function WishlistButton({
  id,
  hasText = false,
  size = 'small'
}: WishlistButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { data } = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  if (!data) return null

  const buttonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  async function handleWishlistButtonClick() {
    setIsLoading(true)

    if (!isInWishlist(id)) {
      await addToWishlist(id)
    } else {
      await removeFromWishlist(id)
    }

    setIsLoading(false)
  }

  return (
    <Button
      minimal
      size={size}
      icon={<ButtonIcon isFavorited={isInWishlist(id)} isLoading={isLoading} />}
      onClick={handleWishlistButtonClick}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
