import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameCard from '.'
import styled from 'styled-components'

export default {
  title: 'GameCard',
  component: GameCard,
  argTypes: {}
} as ComponentMeta<typeof GameCard>

const Wrapper = styled.div`
  width: 30rem;
`

const Template: ComponentStory<typeof GameCard> = (args) => (
  <Wrapper>
    <GameCard {...args} />
  </Wrapper>
)

export const Basic = Template.bind({})

Basic.args = {
  title: 'Devil May Cry 5',
  developer: 'Capcom',
  img: 'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
  price: 'R$ 235,00'
}

export const Promotional = Template.bind({})

Promotional.args = {
  title: 'Devil May Cry 5',
  developer: 'Capcom',
  img: 'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 130,00'
}
