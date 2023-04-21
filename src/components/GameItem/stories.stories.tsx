import { Meta } from '@storybook/react'

import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta<typeof GameItem>

export const Basic = {
  args: {
    img: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
    price: 'R$ 225,50',
    title: 'God of War - Ragnarok'
  }
}

export const WithRemoveButton = {
  args: {
    ...Basic.args,
    isItemInCart: () => true
  }
}

export const WithPayment = {
  args: {
    img: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
    price: 'R$ 225,50',
    title: 'God of War - Ragnarok',
    downloadLink: 'https://wongames.com/download/god-of-war-ragnarok',
    paymentInfo: {
      flag: 'mastercard',
      img: 'img/credit-cards/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  }
}
