import { Meta } from '@storybook/react'

import Empty from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta<typeof Empty>

export const Basic = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  }
}
