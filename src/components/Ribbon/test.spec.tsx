import { screen, render } from 'utils/tests/render'
import theme from 'styles/theme'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    render(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with the primary color by default', () => {
    render(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render with the normal size by default', () => {
    render(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: theme.font.sizes.small
    })
  })

  it('should render with the small size', () => {
    render(<Ribbon size="small">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    })
  })
})
