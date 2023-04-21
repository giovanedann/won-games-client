import { Meta } from '@storybook/react'

import GameInfo from '.'
import gameInfoMock from './data.mock'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta<typeof GameInfo>

export const Basic = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    ...gameInfoMock
  }
}
