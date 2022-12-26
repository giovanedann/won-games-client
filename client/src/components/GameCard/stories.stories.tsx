import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  argTypes: {}
} as ComponentMeta<typeof GameCard>

const Template: ComponentStory<typeof GameCard> = (args) => (
  <GameCard {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Devil May Cry 5',
  developer: 'Capcom',
  img: 'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
  price: 'R$ 235,00'
}
