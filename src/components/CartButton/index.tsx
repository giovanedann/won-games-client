import Button from 'components/Button'
import { useCart } from 'contexts/cart'
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md'

type CartButtonProps = {
  id: string
}

function CartButton({ id }: CartButtonProps) {
  const { addToCart, isItemInCart, removeFromCart } = useCart()

  return (
    <Button
      icon={
        isItemInCart(id) ? (
          <MdRemoveShoppingCart title="remove item from cart" />
        ) : (
          <MdAddShoppingCart title="add item to cart" />
        )
      }
      size="small"
      onClick={() => (isItemInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  )
}

export default CartButton
