import React from 'react'
import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'

import Showcase from '.'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

const Container = styled.div`
  margin: 0 auto;
`

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as Meta<typeof Showcase>

const Template: StoryFn<typeof Showcase> = (args) => <Showcase {...args} />

Template.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}

export const Basic = Template.bind({})

Basic.args = {
  title: 'Most popular',
  games: gamesMock,
  highlight: highlightMock
}

export const WithoutHighlight = Template.bind({})

WithoutHighlight.args = {
  title: 'Most popular',
  games: gamesMock
}

export const WithoutGames = Template.bind({})

WithoutGames.args = {
  title: 'Most popular',
  highlight: highlightMock
}
