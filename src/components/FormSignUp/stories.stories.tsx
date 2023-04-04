import React from 'react'
import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'

import FormSignUp from '.'

const Container = styled.div`
  width: 300px;
  margin: auto;
`

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta<typeof FormSignUp>

const Template: StoryFn<typeof FormSignUp> = () => (
  <Container>
    <FormSignUp />
  </Container>
)

export const Basic = Template.bind({})
