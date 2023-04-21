import { Meta } from '@storybook/react'

import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    title: {
      type: 'symbol'
    }
  }
} as Meta<typeof Dropdown>

export const Basic = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    title: 'Open',
    children: 'Content'
  }
}
