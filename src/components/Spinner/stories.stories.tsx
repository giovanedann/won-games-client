import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Spinner from '.'

export default {
  title: 'Spinner',
  component: Spinner
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />

export const Basic = {
  render: Template,

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}
