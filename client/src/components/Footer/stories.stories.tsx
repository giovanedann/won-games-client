import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
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
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => (
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
