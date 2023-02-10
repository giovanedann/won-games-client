import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
} as ComponentMeta<typeof PaymentOptions>

const Template: ComponentStory<typeof PaymentOptions> = (args) => (
  <Container>
    <PaymentOptions {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  cards: paymentOptionsMock
}
