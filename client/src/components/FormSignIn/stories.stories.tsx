import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignIn from '.'
import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  margin: auto;
`

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof FormSignIn>

const Template: ComponentStory<typeof FormSignIn> = () => (
  <Container>
    <FormSignIn />
  </Container>
)

export const Basic = Template.bind({})
