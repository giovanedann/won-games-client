import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'

import Profile from '.'

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function ProfileMenu() {
      return <div data-testid="profile-menu-mock" />
    }
  }
})

jest.mock('next/router', () => ({
  __esModules: true,
  useRouter: jest.fn(() => ({ asPath: '/profile/orders' }))
}))

describe('<Profile />', () => {
  it('should render the right elements', () => {
    renderWithTheme(
      <Profile>
        <h1>Profile template</h1>
      </Profile>
    )

    expect(
      screen.getByRole('heading', { name: /my profile/i, level: 2 })
    ).toBeInTheDocument()

    expect(screen.getByTestId('profile-menu-mock')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /profile template/i, level: 1 })
    ).toBeInTheDocument()
  })
})
