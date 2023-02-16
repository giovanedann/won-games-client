import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
} as ComponentMeta<typeof CartIcon>

const Template: ComponentStory<typeof CartIcon> = (args) => (
  <CartIcon {...args} />
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  quantity: 0
}
