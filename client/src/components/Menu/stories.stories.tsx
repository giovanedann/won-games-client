import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
