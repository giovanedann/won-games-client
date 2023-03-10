import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import UserDropdown from '.'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 98%;
  display: flex;
  justify-content: flex-end;
`

export default {
  title: 'UserDropdown',
  component: UserDropdown
} as ComponentMeta<typeof UserDropdown>

const Template: ComponentStory<typeof UserDropdown> = (args) => (
  <Container>
    <UserDropdown {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.args = {
  username: 'Dante'
}

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
