import 'match-media-mock'
import 'session.mock'
import { screen, render } from 'utils/tests/render'
import GameCardSlider from '.'

import theme from 'styles/theme'
import items from './data.mock'

describe('<GameCardSlider />', () => {
  it('should render with 4 visible items', () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.getElementsByClassName('slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color is white', () => {
    render(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    })

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
})
