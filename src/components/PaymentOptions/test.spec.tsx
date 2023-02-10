import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'

import PaymentOptions from '.'
import paymentOptionsMock from './data.mock'

describe('<PaymentOptions />', () => {
  it('should render the right elements', () => {
    renderWithTheme(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByText(/4325/i)).toBeInTheDocument()
    expect(screen.getByText(/4326/i)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
})
