import { Meta } from '@storybook/react'

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

export const Basic = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    activeLink: '/profile/me'
  }
}
