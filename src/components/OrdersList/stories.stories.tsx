import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

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
} as Meta<typeof OrdersList>

const Template: StoryFn<typeof OrdersList> = (args) => (
  <Container>
    <OrdersList {...args} />
  </Container>
)

export const Basic = {
  render: Template,

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    items: ordersListMock
  }
}
