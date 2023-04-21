import { Meta } from '@storybook/react'

import CartButton from '.'
import { CartContextData } from 'contexts/cart'

export default {
  title: 'CartButton',
  component: CartButton,
  argTypes: {
    id: {
      type: 'string'
    },
    hasText: {
      type: 'boolean'
    }
  }
} as Meta<typeof CartButton & CartContextData>

export const Basic = {
  args: {
    id: 'id_123',
    hasText: false
  }
}

export const OnCartWithText = {
  args: {
    id: 'id_123',
    hasText: true,
    isItemInCart: () => true
  }
}

export const NotOnCartWithText = {
  args: {
    id: 'id_123',
    hasText: true,
    isItemInCart: () => false
  }
}
