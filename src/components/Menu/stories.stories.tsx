import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    username: {
      type: 'string',
      control: {
        type: 'text'
      }
    }
  }
} as Meta<typeof Menu>

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />

export const Basic = Template.bind({})

Basic.args = {}
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
