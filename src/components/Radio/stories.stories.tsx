import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Radio from '.'
import styled from 'styled-components'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta<typeof Radio>

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Template: StoryFn<typeof Radio> = (args) => (
  <Container>
    <Radio
      label="first"
      labelFor="first"
      id="first"
      name="name"
      value="first"
      defaultChecked
      {...args}
    />
    <Radio
      label="second"
      labelFor="second"
      id="second"
      name="name"
      value="second"
      {...args}
    />
    <Radio
      label="third"
      labelFor="third"
      id="third"
      name="name"
      value="third"
      {...args}
    />
  </Container>
)

export const Basic = {
  render: Template,

  args: {
    labelColor: 'white'
  },

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
