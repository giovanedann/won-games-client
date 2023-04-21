import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Gallery from '.'
import galleryMock from './data.mock'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export default {
  title: 'Gallery',
  component: Gallery
} as Meta<typeof Gallery>

const Template: StoryFn<typeof Gallery> = (args) => (
  <Container>
    <Gallery {...args} />
  </Container>
)

export const Basic = {
  render: Template,

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    items: galleryMock
  }
}
