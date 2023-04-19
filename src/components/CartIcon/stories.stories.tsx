import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { CartContextData } from 'contexts/cart'

import CartIcon from '.'

type CartIconArgs =
  | { cartContextValue: Partial<CartContextData> }
  | { itemsQuantity: number }

export default {
  title: 'CartIcon',
  component: CartIcon,
  argTypes: {
    itemsQuantity: {
      control: { type: 'number' }
    }
  }
} as Meta<CartIconArgs>

const Template: StoryFn<CartIconArgs> = () => <CartIcon />

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  itemsQuantity: 0
}
