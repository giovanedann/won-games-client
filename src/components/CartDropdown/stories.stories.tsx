import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import CartDropdown from '.'
import styled from 'styled-components'
import cartListMock from 'components/CartList/data.mock'

const Container = styled.div`
  max-width: 98%;
  display: flex;
  justify-content: flex-end;
`

type CartDropdownArgs = {
  items: typeof cartListMock
  totalPrice: string
}

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  argTypes: {
    items: {
      type: 'symbol'
    },
    totalPrice: {
      type: 'string',
      control: 'text'
    }
  }
} as Meta<CartDropdownArgs>

const Template: StoryFn<CartDropdownArgs> = () => (
  <Container>
    <CartDropdown />
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
    items: cartListMock,
    totalPrice: 'R$ 260,00'
  }
}
