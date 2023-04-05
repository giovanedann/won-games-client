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

export default {
  title: 'CartDropdown',
  component: CartDropdown
} as Meta<typeof CartDropdown>

const Template: StoryFn<typeof CartDropdown> = (args) => (
  <Container>
    <CartDropdown {...args} />
  </Container>
)

export const Basic = Template.bind({})
Basic.args = {
  items: cartListMock,
  total: 'R$ 250,00'
}
