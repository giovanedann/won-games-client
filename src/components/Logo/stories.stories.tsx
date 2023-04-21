import { Meta } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      name: 'color',
      options: ['white', 'black'],
      control: {
        type: 'radio'
      }
    },
    size: {
      name: 'color',
      options: ['normal', 'large'],
      control: {
        type: 'select'
      }
    },
    hideOnMobile: {
      name: 'hidden',
      type: 'boolean'
    }
  }
} as Meta<typeof Logo>

export const Basic = {
  args: {
    color: 'white',
    size: 'normal',
    hideOnMobile: false
  }
}
