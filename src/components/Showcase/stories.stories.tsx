import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Showcase from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof Showcase>

const Template: ComponentStory<typeof Showcase> = (args) => <Showcase {...args} />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
