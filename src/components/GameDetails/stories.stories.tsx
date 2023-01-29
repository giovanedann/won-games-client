import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameDetails, { Platform } from '.'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

const platforms: Platform[] = ['windows', 'linux', 'mac']

export default {
  title: 'GameDetails',
  component: GameDetails,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as ComponentMeta<typeof GameDetails>

const Template: ComponentStory<typeof GameDetails> = (args) => (
  <Container>
    <GameDetails {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  platforms
}
