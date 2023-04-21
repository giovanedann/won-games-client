import { Meta } from '@storybook/react'

import GameInfo from '.'
import gameInfoMock from './data.mock'
import { CartContextData } from 'contexts/cart'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta<typeof GameInfo & CartContextData>

export const InCart = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    ...gameInfoMock,
    isItemInCart: () => true
  }
}

export const NotInCart = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    ...gameInfoMock,
    isItemInCart: () => false
  }
}
