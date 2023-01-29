import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameInfo from '.'

export default {
  title: 'GameInfo',
  component: GameInfo,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof GameInfo>

const Template: ComponentStory<typeof GameInfo> = (args) => <GameInfo {...args} />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
