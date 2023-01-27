import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameCard from '.'
import styled from 'styled-components'

export default {
  title: 'GameCard',
  component: GameCard,
  argTypes: {
    onFav: {
      action: 'clicked',
      type: 'symbol'
    },
    favorite: {
      type: 'boolean',
      control: {
        options: [true, false],
        type: 'boolean'
      }
    }
  }
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
  price: 'R$ 235,00',
  favorite: false
}

Basic.parameters = {
  controls: {
    exclude: [
      'promotionalPrice',
      'onFav',
      'ribbon',
      'ribbonColor',
      'ribbonSize'
    ]
  }
}

export const Promotional = Template.bind({})

Promotional.args = {
  ...Basic.args,
  promotionalPrice: 'R$ 130,00'
}

Promotional.parameters = {
  controls: {
    exclude: ['onFav']
  }
}

export const WithRibbon = Template.bind({})

WithRibbon.args = {
  ...Basic.args,
  promotionalPrice: 'R$ 130,00',
  ribbon: '55% OFF',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}

WithRibbon.parameters = {
  controls: {
    exclude: ['onFav']
  }
}
