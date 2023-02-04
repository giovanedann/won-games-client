import theme from 'styles/theme'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Container from '.'

describe('<Container />', () => {
  it('should render the container with the right styles', () => {
    const { container } = renderWithTheme(<Container />)

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
