import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
