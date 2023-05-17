import { GetOrders_orders } from 'graphql/generated/GetOrders'
import getImageUrl from 'utils/getImageUrl'

const ordersListMock = [
  {
    id: '1',
    paymentInfo: {
      flag: 'visa',
      img: '/img/credit-cards/visa.png',
      number: '**** **** **** 4242',
      purchaseDate: 'Purchase made on Apr 14, 2021'
    },
    games: [
      {
        id: '1',
        title: 'game',
        downloadLink:
          'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
        img: getImageUrl('/image.jpg'),
        price: '$10'
      }
    ]
  },
  {
    id: '2',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/credit-cards/visa.png',
      number: '**** **** **** 4242',
      purchaseDate: 'Purchase made on Apr 14, 2021'
    },
    games: [
      {
        id: '1',
        title: 'game',
        downloadLink:
          'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
        img: getImageUrl('/image.jpg'),
        price: '$10'
      }
    ]
  }
]

export default ordersListMock
