import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'
import Footer from '.'

const StoryContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {}
} as Meta<typeof Footer>

const Template: StoryFn<typeof Footer> = () => (
  <StoryContainer>
    <Footer />
  </StoryContainer>
)

export const Basic = Template.bind({})

Basic.args = {}

Basic.parameters = {
  backgrounds: {
    default: 'light'
  }
}
