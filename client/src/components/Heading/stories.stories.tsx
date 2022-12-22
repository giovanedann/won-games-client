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
    }
  }
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Heading'
} // default values for your props
