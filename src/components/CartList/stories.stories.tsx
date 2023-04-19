import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import CartList from '.'
import cartListMock from './data.mock'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
`

type CartListArgs = {
  items: typeof cartListMock
  hasButton: boolean
  totalPrice: string
}

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    items: {
      type: 'symbol'
    },
    hasButton: {
      control: {
        type: 'boolean'
      }
    },
    totalPrice: {
      type: 'string'
    }
  }
} as Meta<CartListArgs>

const Template: StoryFn<CartListArgs> = (args) => (
  <Container>
    <CartList {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  items: cartListMock,
  hasButton: true,
  totalPrice: '$ 430,00'
}

export const Empty = Template.bind({})

Empty.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Empty.args = {
  items: [],
  hasButton: false
}
