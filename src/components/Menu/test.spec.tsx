import { screen, render } from 'utils/tests/render'
import userEvent from '@testing-library/user-event'

import Menu from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter') // eslint-disable-line

useRouter.mockImplementation(() => ({
  query: {},
  push: jest.fn()
}))

describe('<Menu />', () => {
  it('should render the menu icons and logo', () => {
    render(<Menu isLoading={false} username="username" />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart icon/i)).toHaveLength(2)
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should open and close menu on menu icon click', async () => {
    const user = userEvent.setup()
    render(<Menu isLoading={false} username={null} />)

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
    render(<Menu isLoading={false} username={null} />)

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
  })

  it('should show wish list and account links and hide register box when logged in', () => {
    render(<Menu isLoading={false} username="username" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
  })

  it('should not show sign in button or user dropdown if loading', () => {
    render(<Menu isLoading username="username" />)

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
  })
})
