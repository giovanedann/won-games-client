import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  argTypes: {
    quantity: {
      type: 'number',
      control: {
        type: 'number'
      }
    }
  }
} as Meta<typeof CartIcon>

const Template: StoryFn<typeof CartIcon> = (args) => <CartIcon {...args} />

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  quantity: 0
}
