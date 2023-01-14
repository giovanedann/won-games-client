import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof FormSignIn>

const Template: ComponentStory<typeof FormSignIn> = (args) => (
  <FormSignIn {...args} />
)

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
