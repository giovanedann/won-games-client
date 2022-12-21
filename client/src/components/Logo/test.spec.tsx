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

  it('should render a normal logo by default', () => {
    renderWithTheme(<Logo />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ width: '11rem', height: '3.3rem' })
  })

  it('should have the right size variants styles', () => {
    const { rerender } = renderWithTheme(<Logo size="large" />)
    let svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ width: '20rem', height: '5.9rem' })

    rerender(<Logo size="normal" />)
    svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ width: '11rem', height: '3.3rem' })
  })

  it('should render the logo without text on small screens if hideOnMobile is true', () => {
    renderWithTheme(<Logo hideOnMobile />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })

  it('should render the logo with text on small screens if hideOnMobile is false', () => {
    renderWithTheme(<Logo hideOnMobile={false} />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    const svgText = svgWrapper?.getElementsByClassName('text')
    expect(svgText).not.toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)'
    })
  })
})
