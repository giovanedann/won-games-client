import { screen, render } from 'utils/tests/render'

import Logo from '.'
import theme from 'styles/theme'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ color: theme.colors.white })
  })

  it('should render a black label when prop color is black', () => {
    render(<Logo color="black" />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ color: theme.colors.black })
  })

  it('should render a normal logo by default', () => {
    render(<Logo />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ width: '11rem', height: '3.3rem' })
  })

  it('should have the right size variants styles', () => {
    const { rerender } = render(<Logo size="large" />)
    let svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ width: '20rem', height: '5.9rem' })

    rerender(<Logo size="normal" />)
    svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyle({ width: '11rem', height: '3.3rem' })
  })

  it('should render the logo without text on small screens if hideOnMobile is true', () => {
    render(<Logo hideOnMobile />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    expect(svgWrapper).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })

  it('should render the logo with text on small screens if hideOnMobile is false', () => {
    render(<Logo hideOnMobile={false} />)
    const svgWrapper = screen.getByLabelText(/won games/i).parentElement
    const svgText = svgWrapper?.getElementsByClassName('text')
    expect(svgText).not.toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)'
    })
  })

  it('should render the logo with with the id passed', () => {
    const { container } = render(<Logo hideOnMobile={false} id="test-id" />)

    expect(container.querySelector('#paint_linear_test-id')).toBeInTheDocument()
  })
})
