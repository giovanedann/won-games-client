import { screen, render } from 'utils/tests/render'

import userEvent from '@testing-library/user-event'

import PaymentOptions from '.'
import paymentOptionsMock from './data.mock'

describe('<PaymentOptions />', () => {
  it('should render the right elements', () => {
    render(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/4325/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/i)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    render(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />
    )

    await userEvent.click(screen.getByLabelText(/4325/))
    expect(await screen.findByRole('radio', { name: /4325/ })).toBeChecked()
  })

  it('should not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn()

    render(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    )

    await userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    render(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    )

    await userEvent.click(screen.getByLabelText(/4325/))
    await userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).toHaveBeenCalled()
  })
})
