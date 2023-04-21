import { Meta } from '@storybook/react'

import TextContent from '.'
import textMock from './data.mock'

export default {
  title: 'TextContent',
  component: TextContent
} as Meta<typeof TextContent>

export const Basic = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    ...textMock
  }
}
