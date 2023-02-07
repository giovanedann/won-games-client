import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import renderWithTheme from 'utils/tests/renderWithTheme'
import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render all the links', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render with the active link coloured and the others with default styles', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.black
    })
  })
})
