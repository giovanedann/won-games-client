import { render, screen } from 'utils/tests/render'
import PaymentForm from '.'
import { Session } from 'next-auth'
import { CartContextData, cartContextDefaultValues } from 'contexts/cart'
import cartListMock from 'components/CartList/data.mock'
import StripeService from 'services/StripeService'

// spies the next router useRouter hook
const useRouter = jest.spyOn(require('next/router'), 'useRouter') // eslint-disable-line

// mock implementation of push function
useRouter.mockImplementation(() => ({
  push: jest.fn()
}))

// mock react stripe used items
jest.mock('@stripe/react-stripe-js', () => ({
  // mocks the CardElement component to be a mocked component
  CardElement: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="cardelement-mock">{children}</div>
  },
  // mocks the Elements component to be a mocked component
  Elements: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="elements-mock">{children}</div>
  },
  // mocks the useStripe hook
  useStripe: jest.fn().mockReturnValue({
    confirmCardPayment: jest.fn().mockResolvedValue({
      paymentMethod: {
        card: 'card'
      }
    })
  }),
  // mocks the useElements hook
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn()
  })
}))

describe('<PaymentForm />', () => {
  let session: Session
  let cartProviderProps: CartContextData

  // mocks the user session before each test, and set the provider props
  beforeEach(() => {
    session = {
      id: '123',
      jwt: 'token',
      user: {
        email: 'won@games.com'
      },
      expires: '13234'
    }

    cartProviderProps = {
      ...cartContextDefaultValues,
      items: cartListMock
    }
  })

  // clear mocks to avoid spies accumulation of methods calls
  afterEach(jest.clearAllMocks)

  it('should render the right elements', () => {
    render(<PaymentForm session={session} />)

    expect(
      screen.getByRole('heading', { name: /Payment/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId(/cardelement-mock/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /continue shopping/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /buy now/i })).toBeDisabled()
  })

  it('should call createPaymentIntent on load when games are free', async () => {
    jest
      .spyOn(StripeService, 'createPaymentIntent')
      .mockResolvedValueOnce({ freeGames: true })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(StripeService.createPaymentIntent).toHaveBeenCalled()
    expect(StripeService.createPaymentIntent).toHaveBeenCalledTimes(1)

    expect(
      await screen.findByText(/only free games in cart! click buy and enjoy!/i)
    ).toBeInTheDocument()
  })

  it('should render an error if createPaymentIntent returns error', async () => {
    jest
      .spyOn(StripeService, 'createPaymentIntent')
      .mockResolvedValueOnce({ error: 'Error creating payment intent' })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(StripeService.createPaymentIntent).toHaveBeenCalled()
    expect(StripeService.createPaymentIntent).toHaveBeenCalledTimes(1)

    expect(
      await screen.findByText(/error creating payment intent/i)
    ).toBeInTheDocument()
  })
})
