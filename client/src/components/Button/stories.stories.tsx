import React from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    size: {
      type: 'string',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    fullWidth: {
      type: 'boolean'
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})

Basic.args = {
  children: 'Button',
  size: 'medium',
  fullWidth: false
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  children: 'With icon',
  size: 'medium',
  icon: <MdOutlineAddShoppingCart />,
  fullWidth: false
}

export const AsLink = Template.bind({})

AsLink.args = {
  children: 'As link',
  size: 'medium',
  fullWidth: false,
  as: 'a',
  href: '/link'
}
