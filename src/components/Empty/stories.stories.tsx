import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Empty from '.'

export default {
  title: 'Empty',
  component: Empty
} as ComponentMeta<typeof Empty>

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
