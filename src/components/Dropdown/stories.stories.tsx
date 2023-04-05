import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    title: {
      type: 'symbol'
    }
  }
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  title: 'Open',
  children: 'Content'
}
