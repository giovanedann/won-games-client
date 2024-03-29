import { screen, render } from 'utils/tests/render'

import { MdOutlineAddShoppingCart } from 'react-icons/md'
import theme from 'styles/theme'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
      'font-size': `${theme.font.sizes.small}`
    })
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      padding: theme.spacings.xxsmall,
      'font-size': `${theme.font.sizes.xsmall}`
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
      'font-size': `${theme.font.sizes.medium}`
    })
  })

  it('should have 100% width on fullWidth true', () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon on left side of the text', () => {
    render(
      <Button icon={<MdOutlineAddShoppingCart title="shopping cart icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTitle(/shopping cart icon/i)).toBeInTheDocument()
  })

  it('should render the right svg variants', () => {
    const { rerender } = render(
      <Button icon={<MdOutlineAddShoppingCart title="shopping cart icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByTitle(/shopping cart icon/i).parentElement).toHaveStyle({
      width: '1.7rem',
      height: '1.7rem'
    })

    rerender(
      <Button
        icon={<MdOutlineAddShoppingCart title="shopping cart icon" />}
        size="small"
      >
        Buy now
      </Button>
    )

    expect(screen.getByTitle(/shopping cart icon/i).parentElement).toHaveStyle({
      width: '1.5rem',
      height: '1.5rem'
    })

    rerender(
      <Button
        icon={<MdOutlineAddShoppingCart title="shopping cart icon" />}
        size="large"
      >
        Buy now
      </Button>
    )

    expect(screen.getByTitle(/shopping cart icon/i).parentElement).toHaveStyle({
      width: '2rem',
      height: '2rem'
    })
  })

  it('should render the button as a link', () => {
    render(
      <Button as="a" href="/mylink">
        Buy now
      </Button>
    )

    expect(
      screen.queryByRole('button', {
        name: /buy now/i
      })
    ).not.toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/mylink'
    )
  })

  it('should render the minimal styles', () => {
    render(
      <Button
        icon={<MdOutlineAddShoppingCart title="shopping cart icon" />}
        minimal
      >
        Buy now
      </Button>
    )

    expect(screen.getByRole('button')).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.white}`
    })

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTitle(/shopping cart icon/i)).toBeInTheDocument()
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
