import LocalStorage from './LocalStorage'

describe('LocalStorage', () => {
  beforeEach(() => window.localStorage.clear())

  it('should get the value of local storage', () => {
    const gamesIds = ['123', '234', '345']
    window.localStorage.setItem('WONGAMES_cartItems', JSON.stringify(gamesIds))

    expect(LocalStorage.get('cartItems')).toStrictEqual(gamesIds)
  })

  it('should set the value on localStorage', () => {
    const gamesIds = ['123', '234', '345']
    LocalStorage.set('cartItems', gamesIds)

    expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
      JSON.stringify(gamesIds)
    )
  })
})
