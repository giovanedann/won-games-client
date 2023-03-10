import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  argTypes: {
    activeLink: {
      control: {
        type: 'select'
      }
    }
  }
} as ComponentMeta<typeof ProfileMenu>

const Template: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  activeLink: '/profile/me'
}
