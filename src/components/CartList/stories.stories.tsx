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

export const Basic = {
  render: Template,

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    items: cartListMock,
    hasButton: true,
    totalPrice: '$ 430,00'
  }
}

export const WithLoader = {
  render: Template,

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    loading: true
  }
}

export const Empty = {
  render: Template,

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    items: [],
    hasButton: false
  }
}
