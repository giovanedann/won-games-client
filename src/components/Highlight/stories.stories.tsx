import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import item from './data.mock'

import Highlight from '.'
import styled from 'styled-components'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    alignment: {
      type: 'string',
      options: ['left', 'right'],
      control: {
        type: 'select'
      }
    }
  }
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
  ...item
}

export const WithFloatImage = Template.bind({})

WithFloatImage.args = {
  ...Basic.args,
  floatImage: '/img/red-dead-float.png'
}
