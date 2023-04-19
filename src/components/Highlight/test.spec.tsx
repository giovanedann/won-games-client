import { screen, render } from 'utils/tests/render'

import Highlight from '.'
import * as S from './styles'

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
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { level: 2, name: /title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: /subtitle/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render the background image', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `${props.backgroundImage}`
    })
  })

  it('should render the float image', () => {
    render(<Highlight {...props} />)

    const titleRegExp = new RegExp(props.title, 'i')

    expect(screen.getByRole('img', { name: titleRegExp })).toBeInTheDocument()
  })

  it('should change alignment accordingly to alignment prop', () => {
    const { rerender, container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })

    rerender(<Highlight {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
