import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Checkbox from '.'
import styled from 'styled-components'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta<typeof Checkbox>

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
`

const Template: StoryFn<typeof Checkbox> = (args) => (
  <Container>
    <Checkbox
      name="category"
      label="Adventure"
      labelFor="adventure"
      isChecked
      {...args}
    />
    <Checkbox name="category" label="Action" labelFor="action" {...args} />
    <Checkbox name="category" isChecked label="RPG" labelFor="rpg" {...args} />
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
  color: 'white'
}
