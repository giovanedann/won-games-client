import React from 'react'
import { StoryObj, StoryFn, Meta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'desktop'
    }
  }
} as Meta<typeof MediaMatch>

export const Desktop: StoryFn<typeof MediaMatch> = () => (
  <MediaMatch greaterThan="medium">Desktop</MediaMatch>
)

export const Mobile: StoryObj<typeof MediaMatch> = {
  render: () => <MediaMatch lessThan="medium">Mobile</MediaMatch>,

  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
