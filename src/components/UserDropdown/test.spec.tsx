import { screen } from '@testing-library/react'
import UserDropdown from '.'
import renderWithTheme from 'utils/tests/renderWithTheme'
import userEvent from '@testing-library/user-event'

describe('<UserDropdown />', () => {
  it('should display the userme', () => {
    renderWithTheme(<UserDropdown username="Dante" />)

    expect(screen.getByText(/dante/i)).toBeInTheDocument()
  })

  it('should display the menu options on username click', async () => {
    const user = userEvent.setup()
    renderWithTheme(<UserDropdown username="Dante" />)

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
})
