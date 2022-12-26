import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Highlight from '.'

const props = {
  title: 'Title',
  subtitle: 'Subtitle',
  buttonLabel: 'Buy now',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png',
  buttonLink: '/games/rdr2'
}

describe('<Highlight />', () => {
  it('should render the right elements', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { level: 2, name: /title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: /subtitle/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `${props.backgroundImage}`
    })
  })

  it('should render the float image', () => {
    renderWithTheme(<Highlight {...props} />)

    const titleRegExp = new RegExp(props.title, 'i')

    expect(screen.getByRole('img', { name: titleRegExp })).toBeInTheDocument()
  })
})
