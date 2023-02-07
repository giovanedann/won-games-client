import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
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
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <Container>
    <TextField {...args} />
  </Container>
)

export const Basic = Template.bind({})

export const WithIcon = Template.bind({})

export const WithError = Template.bind({})

Basic.args = {
  label: 'E-mail',
  placeholder: 'jane.doe@email.com',
  initialValue: '',
  name: 'email',
  disabled: false
}

WithIcon.args = {
  ...Basic.args,
  icon: <MdEmail />
}

WithError.args = {
  ...WithIcon.args,
  error: 'This e-mail already exists'
}
