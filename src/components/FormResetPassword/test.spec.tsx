/* eslint-disable @typescript-eslint/no-var-requires */
import 'server.mock'
import { render, screen } from 'utils/tests/render'
import { signIn } from 'next-auth/react'

import FormResetPassword from '.'
import userEvent from '@testing-library/user-event'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({ query }))

jest.mock('next-auth/react', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render the right elements', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
  })

  it('should show the validation errors', async () => {
    const user = userEvent.setup()
    render(<FormResetPassword />)

    expect(
      screen.getByText(/"password" is not allowed to be empty/i)
    ).toBeInTheDocument()

    await user.type(screen.getByPlaceholderText(/^password$/i), '123')
    await user.type(screen.getByPlaceholderText(/confirm password/i), '133')

    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument()
  })

  it('should show error if code provided is not valid', async () => {
    const user = userEvent.setup()
    query = { code: 'invalid' }

    render(<FormResetPassword />)

    await user.type(screen.getByPlaceholderText(/^password$/i), '123')
    await user.type(screen.getByPlaceholderText(/confirm password/i), '123')

    await user.click(screen.getByRole('button', { name: /reset/i }))

    expect(await screen.findByText(/Invalid code./i)).toBeInTheDocument()
  })

  it('should reset the password and login correctly', async () => {
    const user = userEvent.setup()
    query = { code: 'valid' }

    render(<FormResetPassword />)

    await user.type(screen.getByPlaceholderText(/^password$/i), '123')
    await user.type(screen.getByPlaceholderText(/confirm password/i), '123')

    await user.click(screen.getByRole('button', { name: /reset/i }))

    expect(signIn).toHaveBeenCalledWith('credentials', {
      email: 'valid@email.com',
      password: '123',
      callbackUrl: '/'
    })
  })
})
