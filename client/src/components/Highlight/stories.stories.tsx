import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Highlight from '.'
import styled from 'styled-components'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {}
} as ComponentMeta<typeof Highlight>

const Wrapper = styled.div`
  max-width: 104rem;
`

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Wrapper>
    <Highlight {...args} />
  </Wrapper>
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Red Dead Redemption 2',
  subtitle: "Come to see John's new adventures!",
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/reddeadredemption2'
}

export const WithFloatImage = Template.bind({})

WithFloatImage.args = {
  ...Basic.args,
  floatImage: '/img/red-dead-float.png'
}
