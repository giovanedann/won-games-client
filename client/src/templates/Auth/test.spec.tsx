import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Auth from '.'

describe('<Auth />', () => {
  it('should render the logos', () => {
    renderWithTheme(<Auth formTitle="Sign in">Auth</Auth>)

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })

  it('should render the first logo white', () => {
    renderWithTheme(<Auth formTitle="Sign in">Auth</Auth>)

    expect(
      screen.getAllByRole('img', { name: /won games/i })[0].parentElement
    ).toHaveStyle({ color: theme.colors.white })
  })

  it('should render the secoind logo black', () => {
    renderWithTheme(<Auth formTitle="Sign in">Auth</Auth>)

    expect(
      screen.getAllByRole('img', { name: /won games/i })[1].parentElement
    ).toHaveStyle({ color: theme.colors.black })
  })

  it('should render the Banner heading', () => {
    renderWithTheme(<Auth formTitle="Sign in">Auth</Auth>)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place!/i
      })
    ).toBeInTheDocument()
  })

  it('should render the Banner subtitle', () => {
    renderWithTheme(<Auth formTitle="Sign in">Auth</Auth>)

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform in the web\./i
      })
    ).toBeInTheDocument()
  })

  it('should render the sign form with the title of formTitle prop', () => {
    renderWithTheme(<Auth formTitle="Sign in">Auth</Auth>)

    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument()
  })

  it('should render the children', () => {
    renderWithTheme(
      <Auth formTitle="Sign in">
        <p>Children</p>
      </Auth>
    )

    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
