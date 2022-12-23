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
})
