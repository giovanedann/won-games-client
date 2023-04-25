import { screen, render } from 'utils/tests/render'

import Base from '.'

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="menu-mock"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <footer data-testid="footer-mock"></footer>
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    render(
      <Base>
        <h1>Children</h1>
      </Base>
    )

    expect(screen.getByTestId('footer-mock')).toBeInTheDocument()
    expect(screen.getByTestId('menu-mock')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /children/i })
    ).toBeInTheDocument()
  })
})
