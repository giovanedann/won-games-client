import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
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

export const Mobile: StoryFn<typeof MediaMatch> = () => (
  <MediaMatch lessThan="medium">Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
