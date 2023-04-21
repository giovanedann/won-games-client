import { GetGames_games } from 'graphql/generated/GetGames'
import getImageUrl from 'utils/getImageUrl'
import cartAdapter from './cart.adapter'

const cartGames: GetGames_games[] = [
  {
    __typename: 'Game',
    cover: { __typename: 'UploadFile', url: '/cart-game' },
    developers: [{ __typename: 'Developer', name: 'Developer' }],
    id: '123',
    name: 'Cart Game',
    price: 200,
    slug: 'cart-game'
  }
]

describe('Cart adapter', () => {
  it('should return the right adapted object', () => {
    const expectedResult = {
      id: '123',
      title: 'Cart Game',
      price: '$200.00',
      img: getImageUrl('/cart-game')
    }

    expect(cartAdapter(cartGames)).toStrictEqual([expectedResult])
  })
})
