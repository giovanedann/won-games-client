import { screen } from '@testing-library/react'
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
})
