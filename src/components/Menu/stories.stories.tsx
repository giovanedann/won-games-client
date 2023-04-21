import { Meta } from '@storybook/react'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    username: {
      type: 'string',
      control: {
        type: 'text'
      }
    }
  }
} as Meta<typeof Menu>

export const Basic = {
  args: {},

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
