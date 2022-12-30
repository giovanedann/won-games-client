import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  label: '',
  labelFor: 'mycheckbox'
}
