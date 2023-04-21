import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

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
} as Meta<typeof CardsList>

const Template: StoryFn<typeof CardsList> = (args) => (
  <Container>
    <CardsList {...args} />
  </Container>
)

export const Basic = {
  render: Template,

  args: {
    cards: paymentOptionsMock
  }
}
