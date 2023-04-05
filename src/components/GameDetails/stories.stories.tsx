import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import GameDetails from '.'
import styled from 'styled-components'

import gameDetailsMock from './data.mock'

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export default {
  title: 'GameDetails',
  component: GameDetails,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['RPG', 'Action', 'Horror', 'MMORPG', 'Battle Royale']
      }
    },
    releaseDate: {
      control: {
        type: 'date'
      }
    }
  }
} as Meta<typeof GameDetails>

const Template: StoryFn<typeof GameDetails> = (args) => (
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
  ...gameDetailsMock
}
