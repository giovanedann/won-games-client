import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof MediaMatch>

const Template: ComponentStory<typeof MediaMatch> = (args) => <MediaMatch {...args} />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
