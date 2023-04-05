import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import ProfileForm from '.'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 86rem;
  margin: 'auto';
`

export default {
  title: 'Form/ProfileForm',
  component: ProfileForm
} as Meta<typeof ProfileForm>

const Template: StoryFn<typeof ProfileForm> = () => (
  <Container>
    <ProfileForm />
  </Container>
)

export const Basic = Template.bind({})
