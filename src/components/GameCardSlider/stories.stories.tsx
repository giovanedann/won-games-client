import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameCardSlider from '.'
import styled from 'styled-components'
import items from './data.mock'

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
    default: 'won-dark'
  }
}
