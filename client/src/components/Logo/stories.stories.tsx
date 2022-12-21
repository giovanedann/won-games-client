import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = () => <Logo />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
