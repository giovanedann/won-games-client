import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CardsList from '.'
import paymentOptionsMock from 'components/PaymentOptions/data.mock'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 85rem;
  margin: 'auto';
`

export default {
  title: 'CardsList',
  component: CardsList
} as ComponentMeta<typeof CardsList>

const Template: ComponentStory<typeof CardsList> = (args) => (
  <Container>
    <CardsList {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.args = {
  cards: paymentOptionsMock
}
