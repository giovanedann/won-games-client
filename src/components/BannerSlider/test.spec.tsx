import 'match-media-mock'
import { screen, render } from 'utils/tests/render'
import BannerSlider from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

const items = [
  {
    img: 'src1',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'src2',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render a vertical slider', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.getElementsByClassName('slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /defy death 1/i,
        hidden: false
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /defy death 2/i,
        hidden: true
      })
    ).toBeInTheDocument()
  })

  it('should render the dots', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
