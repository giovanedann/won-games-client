import { screen } from '@testing-library/react'
import CardsList from '.'
import renderWithTheme from 'utils/tests/renderWithTheme'

import paymentOptionsMock from 'components/PaymentOptions/data.mock'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

describe('<CardsList />', () => {
  it('should render the card list', () => {
    renderWithTheme(<CardsList cards={paymentOptionsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i, level: 2 })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/credit-cards/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/credit-cards/master-card.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
