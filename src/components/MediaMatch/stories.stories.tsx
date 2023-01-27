import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
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
} as ComponentMeta<typeof MediaMatch>

export const Desktop: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch greaterThan="medium">Desktop</MediaMatch>
)

export const Mobile: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch lessThan="medium">Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
