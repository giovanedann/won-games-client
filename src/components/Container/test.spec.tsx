import theme from 'styles/theme'

import Container from '.'
import { render } from 'utils/tests/render'

describe('<Container />', () => {
  it('should render the container with the right styles', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toHaveStyle({
      'max-width': theme.grid.container
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      />
    `)
  })
})
