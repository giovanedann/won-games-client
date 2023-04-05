import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import GameInfo from '.'
import gameInfoMock from './data.mock'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta<typeof GameInfo>

const Template: StoryFn<typeof GameInfo> = (args) => <GameInfo {...args} />

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  ...gameInfoMock
}
