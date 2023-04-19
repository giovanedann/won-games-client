import { screen, render } from 'utils/tests/render'

import ProfileForm from '.'

describe('<ProfileForm />', () => {
  it('should render the right elements', () => {
    render(<ProfileForm />)

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
