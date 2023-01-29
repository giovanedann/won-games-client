import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameInfo from '.'
import gameInfoMock from './data.mock'

export default {
  title: 'GameInfo',
  component: GameInfo
} as ComponentMeta<typeof GameInfo>

const Template: ComponentStory<typeof GameInfo> = (args) => (
  <GameInfo {...args} />
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  ...gameInfoMock
}
