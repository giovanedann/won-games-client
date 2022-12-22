import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
    lineBottom: {
      type: 'boolean'
    },
    lineLeft: {
      type: 'boolean'
    }
  }
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Heading',
  color: 'black',
  lineBottom: false,
  lineLeft: false
} // default values for your props
