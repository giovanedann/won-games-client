import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with the primary color by default', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render with the normal size by default', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: theme.font.sizes.small
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    })
  })
})
