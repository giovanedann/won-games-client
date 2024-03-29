import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Ribbon from '.'
import styled from 'styled-components'

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      type: 'string',
      options: ['primary', 'secondary'],
      control: {
        type: 'radio'
      }
    },
    size: {
      type: 'string',
      options: ['normal', 'small'],
      control: {
        type: 'radio'
      }
    }
  }
} as Meta<typeof Ribbon>

const RibbonWrapper = styled.div`
  width: 40rem;
  height: 25rem;
  position: relative;
  background-color: #888;
`

const Template: StoryFn<typeof Ribbon> = (args) => (
  <RibbonWrapper>
    <Ribbon {...args}>Best seller</Ribbon>
  </RibbonWrapper>
)

export const Basic = {
  render: Template,
  args: {}
}
