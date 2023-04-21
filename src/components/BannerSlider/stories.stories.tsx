import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import BannerSlider from '.'
import styled from 'styled-components'
import items from './data.mock'

const Wrapper = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export default {
  title: 'BannerSlider',
  component: BannerSlider
} as Meta<typeof BannerSlider>

const Template: StoryFn<typeof BannerSlider> = (args) => (
  <Wrapper>
    <BannerSlider {...args} />
  </Wrapper>
)

export const Basic = {
  render: Template,

  args: {
    items: items
  },

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
