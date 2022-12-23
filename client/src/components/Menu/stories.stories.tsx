import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {}
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = () => <Menu />

export const Basic = Template.bind({})

Basic.args = {}
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
