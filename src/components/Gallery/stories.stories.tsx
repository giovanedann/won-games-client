import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
} as ComponentMeta<typeof Gallery>

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Container>
    <Gallery {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  items: galleryMock
} // default values for your props
