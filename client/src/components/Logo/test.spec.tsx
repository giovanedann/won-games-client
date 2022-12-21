import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Logo from '.'
import theme from 'styles/theme'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ color: theme.colors.white })
  })

  it('should render a black label when prop color is black', () => {
    renderWithTheme(<Logo color="black" />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ color: theme.colors.black })
  })
})
