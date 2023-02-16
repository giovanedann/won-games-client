import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CartList from '.'
import cartListMock from './data.mock'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
`

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    items: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof CartList>

const Template: ComponentStory<typeof CartList> = (args) => (
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
  total: 'R$ 330,00',
  hasButton: false
}
