import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu icons and logo', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should open and close menu on menu icon click', async () => {
    const user = userEvent.setup()
    renderWithTheme(<Menu />)

    const openedMenu = screen.getByRole('navigation', { hidden: true })

    expect(openedMenu).toHaveAttribute('aria-hidden', 'true')
    expect(openedMenu).toHaveStyle({ opacity: 0 })

    await user.click(screen.getByLabelText(/open menu/i))
    expect(openedMenu).toHaveAttribute('aria-hidden', 'false')
    expect(openedMenu).toHaveStyle({ opacity: 1 })

    await user.click(screen.getByLabelText(/close menu/i))
    expect(openedMenu).toHaveAttribute('aria-hidden', 'true')
    expect(openedMenu).toHaveStyle({ opacity: 0 })
  })

  it('should show register box and hide wishlist/account links when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
  })

  it('should show wish list and account links and hide register box when logged in', () => {
    renderWithTheme(<Menu username="username" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/my account/i)).toBeInTheDocument()
  })
})
