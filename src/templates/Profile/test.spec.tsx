import { screen, render } from 'utils/tests/render'

import Profile from '.'

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function ProfileMenu() {
      return <div data-testid="profile-menu-mock" />
    }
  }
})

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => jest.fn()
}))

describe('<Profile />', () => {
  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should render the right elements', () => {
    render(
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
