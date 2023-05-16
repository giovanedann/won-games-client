import { screen, render } from 'utils/tests/render'

import GameItem from '.'
import { CartContextData, cartContextDefaultValues } from 'contexts/cart'
import userEvent from '@testing-library/user-event'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

const props = {
  id: '123',
  img: 'image-source',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should render the item', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render the item with download link and icon', () => {
    const downloadLink = 'https://link'

    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)

    expect(screen.getByTitle(/download icon/i)).toBeInTheDocument()
    expect(screen.getByTitle(/download icon/i).parentElement).toBeInstanceOf(
      SVGElement
    )
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: 'img/credit-cards/mastercard.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })

  it('should call removeFromCart if item is in cart', async () => {
    const removeFromCart = jest.fn()
    const user = userEvent.setup()

    const cartProviderProps: CartContextData = {
      ...cartContextDefaultValues,
      isItemInCart: () => true,
      removeFromCart
    }

    render(<GameItem {...props} />, {
      cartProviderProps
    })

    await user.click(screen.getByText(/remove/i))

    expect(removeFromCart).toHaveBeenCalled()
    expect(removeFromCart).toHaveBeenCalledTimes(1)
  })
})
