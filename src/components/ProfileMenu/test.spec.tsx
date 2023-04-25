import { screen, render } from 'utils/tests/render'
import theme from 'styles/theme'

import ProfileMenu from '.'
import userEvent from '@testing-library/user-event'

const mockSignOut = jest.fn()

jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  signOut: () => mockSignOut()
}))

describe('<ProfileMenu />', () => {
  it('should render all the links', () => {
    render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render with the active link coloured and the others with default styles', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.black
    })
  })

  it('should call next auth signOut on Sign Out click', async () => {
    const user = userEvent.setup()

    render(<ProfileMenu />)

    await user.click(screen.getByRole('link', { name: /sign out/i }))

    expect(mockSignOut).toHaveBeenCalled()
    expect(mockSignOut).toHaveBeenCalledTimes(1)
  })
})
