import React from 'react'
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
