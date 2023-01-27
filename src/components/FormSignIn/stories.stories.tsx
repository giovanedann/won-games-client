import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignIn from '.'

const Container = styled.div`
  width: 300px;
  margin: auto;
`

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as ComponentMeta<typeof FormSignIn>

const Template: ComponentStory<typeof FormSignIn> = () => (
  <Container>
    <FormSignIn />
  </Container>
)

export const Basic = Template.bind({})
