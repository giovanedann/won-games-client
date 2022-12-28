import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BannerSlider from '.'
import styled from 'styled-components'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

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
