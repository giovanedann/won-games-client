import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      name: 'color',
      options: ['white', 'black'],
      control: {
        type: 'radio'
      }
    },
    size: {
      name: 'color',
      options: ['normal', 'large'],
      control: {
        type: 'select'
      }
    }
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Basic = Template.bind({})

Basic.args = {
  color: 'white',
  size: 'normal'
}
