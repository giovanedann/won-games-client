import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    title: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

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
