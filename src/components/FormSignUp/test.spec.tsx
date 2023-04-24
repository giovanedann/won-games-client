import { screen, render } from 'utils/tests/render'

import FormSignUp from '.'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'

describe('<FormSignUp />', () => {
  it('should render the form elements', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/^password$/i, { exact: true })
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render text and link to sign in', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
  })

  it('should display an error if passwords do not match', async () => {
    const user = userEvent.setup()

    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    await user.type(
      screen.getByPlaceholderText(/^password$/i, { exact: true }),
      '123'
    )

    await user.type(screen.getByPlaceholderText(/confirm password/i), '1234')

    expect(screen.getByText(/passwords not matching/i)).toBeInTheDocument()
  })
})
