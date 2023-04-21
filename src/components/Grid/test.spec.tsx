import { render } from 'utils/tests/render'
import Grid from '.'

describe('<Grid />', () => {
  it('should render with the right styles', () => {
    const { container } = render(<Grid>Children</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        grid-gap: 3.2rem;
        margin: 3.2rem 0;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `)
  })
})
