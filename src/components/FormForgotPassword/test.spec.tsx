/* eslint-disable @typescript-eslint/no-var-requires */
import 'server.mock'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/tests/render'

import FormForgotPassword from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}

useRouter.mockImplementation(() => ({ query }))

describe('<FormForgotPassword />', () => {
  it('should render the right elements', () => {
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send e-mail/i })
    ).toBeInTheDocument()
  })

  it('should display input error if email has incorrect format', async () => {
    const user = userEvent.setup()
    render(<FormForgotPassword />)

    await user.type(screen.getByPlaceholderText(/e-mail/i), 'invalid-email')

    expect(
      await screen.findByText(/"email" must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show the mail sent message if email is valid', async () => {
    const user = userEvent.setup()
    render(<FormForgotPassword />)

    await user.type(screen.getByPlaceholderText(/e-mail/i), 'valid@email.com')
    await user.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(
        /In a couple of minutes, you will receive an e-mail!/i
      )
    ).toBeInTheDocument()
  })

  it('should display form error if email does not exist on database', async () => {
    const user = userEvent.setup()
    render(<FormForgotPassword />)

    await user.type(screen.getByPlaceholderText(/e-mail/i), 'false@email.com')
    await user.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/this email does not exist/i)
    ).toBeInTheDocument()
  })
})
