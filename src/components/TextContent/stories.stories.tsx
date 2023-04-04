import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import TextContent from '.'
import textMock from './data.mock'

export default {
  title: 'TextContent',
  component: TextContent
} as Meta<typeof TextContent>

const Template: StoryFn<typeof TextContent> = (args) => (
  <TextContent {...args} />
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  ...textMock
} // default values for your props
