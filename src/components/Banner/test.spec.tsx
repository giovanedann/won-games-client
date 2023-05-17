import { screen, render } from 'utils/tests/render'
import theme from 'styles/theme'

import Banner from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

const props = {
  img: 'url',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the correct elements', () => {
    render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
  })

  it('should render a ribbon', () => {
    render(
      <Banner
        {...props}
        ribbon="Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ 'background-color': theme.colors.secondary })
    expect(ribbon).toHaveStyle({ height: '2.6rem', 'font-size': '1.2rem' })
  })
})
