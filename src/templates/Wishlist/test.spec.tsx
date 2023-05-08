import 'match-media-mock'
import { screen, render } from 'utils/tests/render'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import { wishlistContextDefaultValues } from 'contexts/wishlist'

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <h1>Showcase mock</h1>
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />, {
      wishlistProviderProps: {
        ...wishlistContextDefaultValues,
        items: [gamesMock[0]]
      }
    })

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/showcase mock/i)).toBeInTheDocument()
    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
  })

  it('should render the Empty component when there are no games on wishlist', () => {
    render(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlight={props.recommendedHighlight}
      />,
      {
        wishlistProviderProps: {
          ...wishlistContextDefaultValues,
          items: []
        }
      }
    )

    expect(screen.queryByText(/population 0/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
