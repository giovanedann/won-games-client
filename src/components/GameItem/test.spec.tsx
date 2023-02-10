import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import GameItem from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

const props = {
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
    renderWithTheme(<GameItem {...props} />)

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

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)

    expect(screen.getByTitle(/download icon/i)).toBeInTheDocument()
    expect(screen.getByTitle(/download icon/i).parentElement).toBeInstanceOf(
      SVGElement
    )
  })
})
