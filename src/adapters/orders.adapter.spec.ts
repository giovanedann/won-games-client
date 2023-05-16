import { GetOrders_orders } from 'graphql/generated/GetOrders'
import getImageUrl from 'utils/getImageUrl'
import ordersAdapter from './orders.adapter'

const paidOrder = [
  {
    __typename: 'Order',
    id: '1',
    card_brand: 'flag',
    card_last4: '1111',
    created_at: '2021-04-14T18:41:48.358Z',
    games: [
      {
        id: '1',
        name: 'game',
        developers: [
          {
            name: 'developer'
          }
        ],
        slug: 'game',
        cover: {
          url: '/image.jpg'
        },
        price: 10
      }
    ]
  }
] as GetOrders_orders[]

const freeOrder = [
  {
    __typename: 'Order',
    id: '1',
    card_brand: null,
    card_last4: null,
    created_at: '2021-04-14T18:41:48.358Z',
    games: [
      {
        id: '1',
        name: 'game',
        developers: [
          {
            name: 'developer'
          }
        ],
        slug: 'game',
        cover: {
          url: '/image.jpg'
        },
        price: 0
      }
    ]
  }
] as GetOrders_orders[]

describe('OrdersAdapter', () => {
  it('should return the right paid adapted object', () => {
    const expectedResult = {
      id: '1',
      paymentInfo: {
        flag: 'flag',
        img: '/img/credit-cards/flag.png',
        number: '**** **** **** 1111',
        purchaseDate: 'Purchase made on Apr 14, 2021'
      },
      games: [
        {
          id: '1',
          title: 'game',
          downloadLink:
            'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
          img: getImageUrl('/image.jpg'),
          price: '$10.00'
        }
      ]
    }

    expect(ordersAdapter(paidOrder)).toStrictEqual([expectedResult])
  })

  it('should return the right free adapted object', () => {
    const expectedResult = {
      id: '1',
      paymentInfo: {
        flag: null,
        img: null,
        number: 'Free Game',
        purchaseDate: 'Purchase made on Apr 14, 2021'
      },
      games: [
        {
          id: '1',
          title: 'game',
          downloadLink:
            'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
          img: getImageUrl('/image.jpg'),
          price: '$0.00'
        }
      ]
    }

    expect(ordersAdapter(freeOrder)).toStrictEqual([expectedResult])
  })
})
