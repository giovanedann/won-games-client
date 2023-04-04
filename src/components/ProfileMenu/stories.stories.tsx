import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

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
} as Meta<typeof ProfileMenu>

const Template: StoryFn<typeof ProfileMenu> = (args) => (
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
