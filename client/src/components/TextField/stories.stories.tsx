import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import TextField from '.'

const Container = styled.div`
  padding: 1.5rem;
  max-width: 30rem;
`

export default {
  title: 'TextInput',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' }
  }
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <Container>
    <TextField {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.args = {
  label: 'E-mail',
  placeholder: 'jane.doe@email.com',
  id: 'email',
  initialValue: '',
  labelFor: 'email'
}
