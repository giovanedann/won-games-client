import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameCardSlider from '.'
import styled from 'styled-components'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  argTypes: {}
} as ComponentMeta<typeof GameCardSlider>

const Template: ComponentStory<typeof GameCardSlider> = (args) => (
  <Container>
    <GameCardSlider {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.args = {
  items: items,
  color: 'white'
}

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
