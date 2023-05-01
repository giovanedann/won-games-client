/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen } from 'utils/tests/render'

import FormResetPassword from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}

useRouter.mockImplementation(() => ({ query }))

describe('<FormResetPassword />', () => {
  it('should render the right elements', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
  })
})
