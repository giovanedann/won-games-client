import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import CartButton from '.'

export default {
  title: 'CartButton',
  component: CartButton,
  argTypes: {
    id: {
      type: 'string'
    }
  }
} as Meta<typeof CartButton>

const Template: StoryFn<typeof CartButton> = (args) => <CartButton {...args} />

export const Basic = Template.bind({})

Basic.args = {
  id: 'id_123'
}
