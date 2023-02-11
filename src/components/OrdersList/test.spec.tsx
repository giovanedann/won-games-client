import { screen } from '@testing-library/react'
import OrdersList from '.'
import renderWithTheme from 'utils/tests/renderWithTheme'
import ordersListMock from './data.mock'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="empty-mock" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="game-item-mock">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the right items', () => {
    renderWithTheme(<OrdersList items={ordersListMock} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i, level: 2 })
    ).toBeInTheDocument()
  })
})
