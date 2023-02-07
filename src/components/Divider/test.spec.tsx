import renderWithTheme from 'utils/tests/renderWithTheme'
import Divider from '.'

describe('<Divider />', () => {
  it('should render with the right styles', () => {
    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 5.6rem auto 3.2rem;
        height: 0.1rem;
        background: #B5B5B5D4;
        border: 0;
      }

      @media (min-width:768px) {
        .c0 {
          margin: calc(5.6rem * 2.5) auto 5.6rem;
        }
      }

      <hr
        class="c0"
      />
    `)
  })
})
