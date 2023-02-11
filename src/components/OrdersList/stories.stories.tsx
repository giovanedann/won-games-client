import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import OrdersList from '.'
import ordersListMock from './data.mock'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 86rem;
  padding: 2rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.white};
`

export default {
  title: 'OrdersList',
  component: OrdersList,
  argTypes: {
    items: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof OrdersList>

const Template: ComponentStory<typeof OrdersList> = (args) => (
  <Container>
    <OrdersList {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  items: ordersListMock
}
