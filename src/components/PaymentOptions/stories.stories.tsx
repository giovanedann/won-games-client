import React from 'react'
import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'

import PaymentOptions from '.'
import paymentOptionsMock from './data.mock'

const Container = styled.div`
  padding: 1.6rem;
  max-width: 40rem;
`

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  argTypes: {
    cards: {
      control: {
        type: 'symbol'
      }
    },
    handlePayment: {
      type: 'function',
      action: 'clicked',
      control: {
        type: 'symbol'
      }
    }
  }
} as Meta<typeof PaymentOptions>

const Template: StoryFn<typeof PaymentOptions> = (args) => (
  <Container>
    <PaymentOptions {...args} />
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
    cards: paymentOptionsMock
  }
}
