import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'

import TextField from '.'
import { MdEmail } from 'react-icons/md'

const Container = styled.div`
  padding: 1.5rem;
  max-width: 30rem;
`

export default {
  title: 'Form/TextInput',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'symbol' },
    disabled: {
      type: 'boolean'
    }
  }
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = (args) => (
  <Container>
    <TextField {...args} />
  </Container>
)

export const Basic = {
  render: Template,

  args: {
    label: 'E-mail',
    placeholder: 'jane.doe@email.com',
    initialValue: '',
    name: 'email',
    disabled: false
  }
}

export const WithIcon = {
  render: Template,

  args: {
    ...Basic.args,
    icon: <MdEmail />
  }
}

export const WithError = {
  render: Template,

  args: {
    ...WithIcon.args,
    error: 'This e-mail already exists'
  }
}
