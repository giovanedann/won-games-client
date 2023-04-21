import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

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
} as Meta<typeof GameCardSlider>

const Template: StoryFn<typeof GameCardSlider> = (args) => (
  <Container>
    <GameCardSlider {...args} />
  </Container>
)

export const Basic = {
  render: Template,

  args: {
    items: items,
    color: 'white'
  },

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
