import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'contexts/cart'
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

function CartButton({ id, hasText, size }: CartButtonProps) {
  const { addToCart, isItemInCart, removeFromCart } = useCart()
  const text = isItemInCart(id) ? 'Remove from cart' : 'Add to cart'

  return (
    <Button
      icon={isItemInCart(id) ? <MdRemoveShoppingCart /> : <MdAddShoppingCart />}
      size={size}
      onClick={() => (isItemInCart(id) ? removeFromCart(id) : addToCart(id))}
      title={text}
      aria-label={text}
    >
      {hasText && text}
    </Button>
  )
}

export default CartButton
