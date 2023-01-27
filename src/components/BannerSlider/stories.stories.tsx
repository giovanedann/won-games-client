import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
} as ComponentMeta<typeof BannerSlider>

const Template: ComponentStory<typeof BannerSlider> = (args) => (
  <Wrapper>
    <BannerSlider {...args} />
  </Wrapper>
)

export const Basic = Template.bind({})

Basic.args = {
  items: items
}

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
