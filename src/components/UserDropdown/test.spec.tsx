import { screen, render } from 'utils/tests/render'
import UserDropdown from '.'

import userEvent from '@testing-library/user-event'

const mockSignOut = jest.fn()

jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  signOut: () => mockSignOut()
}))

describe('<UserDropdown />', () => {
  it('should display the userme', () => {
    render(<UserDropdown username="Dante" />)

    expect(screen.getByText(/dante/i)).toBeInTheDocument()
  })

  it('should display the menu options on username click', async () => {
    const user = userEvent.setup()
    render(<UserDropdown username="Dante" />)

    expect(
      screen.queryByRole('link', { name: /my profile/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /wishlist/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /sign out/i })
    ).not.toBeInTheDocument()

    await user.click(screen.getByText(/dante/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should call next auth signOut on Sign Out click', async () => {
    const user = userEvent.setup()

    render(<UserDropdown username="Test" />)

    await user.click(screen.getByText(/test/i))
    await user.click(screen.getByRole('link', { name: /sign out/i }))

    expect(mockSignOut).toHaveBeenCalled()
    expect(mockSignOut).toHaveBeenCalledTimes(1)
  })
})
