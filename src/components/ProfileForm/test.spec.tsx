import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import ProfileForm from '.'

describe('<ProfileForm />', () => {
  it('should render the right elements', () => {
    renderWithTheme(<ProfileForm />)

    expect(
      screen.getByRole('heading', { name: /my profile/i, level: 2 })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/old password/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /save changes/i })
    ).toBeInTheDocument()
  })
})
