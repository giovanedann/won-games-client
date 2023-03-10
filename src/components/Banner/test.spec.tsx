import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the correct elements', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
  })

  it('should render a ribbon', () => {
    renderWithTheme(
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
