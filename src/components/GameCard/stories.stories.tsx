/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { CartContextData } from 'contexts/cart'
import { StoryFn, Meta } from '@storybook/react'

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
} as Meta<typeof GameCard & CartContextData>

const Wrapper = styled.div`
  width: 30rem;
`

const Template: StoryFn<typeof GameCard & CartContextData> = (args) => (
  <Wrapper>
    <GameCard {...args} />
  </Wrapper>
)

export const Basic = {
  render: Template,

  args: {
    title: 'Devil May Cry 5',
    slug: 'devil-may-cry-5',
    developer: 'Capcom',
    img: 'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
    price: 'R$ 235,00',
    favorite: false
  },

  parameters: {
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
}

export const Promotional = {
  render: Template,

  args: {
    ...Basic.args,
    promotionalPrice: 'R$ 130,00'
  },

  parameters: {
    controls: {
      exclude: ['onFav']
    }
  }
}

export const WithRibbon = {
  render: Template,

  args: {
    ...Basic.args,
    promotionalPrice: 'R$ 130,00',
    ribbon: '55% OFF',
    ribbonColor: 'primary',
    ribbonSize: 'small'
  },

  parameters: {
    controls: {
      exclude: ['onFav']
    }
  }
}

export const IsInCart = {
  render: Template,

  args: {
    ...Basic.args,
    isItemInCart: () => true
  }
}
