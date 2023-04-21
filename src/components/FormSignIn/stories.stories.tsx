import React from 'react'
import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'

import FormSignIn from '.'

const Container = styled.div`
  width: 300px;
  margin: auto;
`

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta<typeof FormSignIn>

const Template: StoryFn<typeof FormSignIn> = () => (
  <Container>
    <FormSignIn />
  </Container>
)

export const Basic = {
  render: Template
}
