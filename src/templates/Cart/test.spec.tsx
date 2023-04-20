import 'match-media-mock'
import { screen, render } from 'utils/tests/render'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import itemsMock from 'components/CartList/data.mock'
import paymentOptionsMock from 'components/PaymentOptions/data.mock'

import Cart from '.'
import { cartContextDefaultValues } from 'contexts/cart'

const props = {
  cards: paymentOptionsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    render(<Cart {...props} />, {
      cartProviderProps: {
        ...cartContextDefaultValues,
        items: itemsMock,
        itemsQuantity: itemsMock.length,
        totalPrice: '$430,00'
      }
    })

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    render(<Cart {...props} />, {
      cartProviderProps: {
        ...cartContextDefaultValues,
        items: [],
        itemsQuantity: itemsMock.length,
        totalPrice: '$430,00'
      }
    })

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
