import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignUp from '.'

const Container = styled.div`
  width: 300px;
  margin: auto;
`

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as ComponentMeta<typeof FormSignUp>

const Template: ComponentStory<typeof FormSignUp> = () => (
  <Container>
    <FormSignUp />
  </Container>
)

export const Basic = Template.bind({})
