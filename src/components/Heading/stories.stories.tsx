import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      name: 'text',
      type: 'string',
      control: {
        type: 'text'
      }
    },
    color: {
      type: 'string',
      options: ['white', 'black'],
      control: {
        type: 'radio'
      }
    },
    size: {
      type: 'string',
      options: ['small', 'medium', 'huge'],
      control: {
        type: 'select'
      }
    },
    lineColor: {
      type: 'string',
      options: ['primary', 'secondary'],
      control: {
        type: 'select'
      }
    },
    lineBottom: {
      type: 'boolean'
    },
    lineLeft: {
      type: 'boolean'
    }
  }
} as Meta<typeof Heading>

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />

export const Basic = Template.bind({})

Basic.args = {
  children: 'Heading',
  color: 'black',
  lineBottom: false,
  lineLeft: false,
  size: 'medium',
  lineColor: 'primary'
}
