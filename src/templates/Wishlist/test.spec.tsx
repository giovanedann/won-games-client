import 'match-media-mock'
import { screen, render } from 'utils/tests/render'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
  games: gamesMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <h1>Showcase mock</h1>
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/showcase mock/i)).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })

  it('should render the Empty component when there are no games on wishlist', () => {
    render(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlight={props.recommendedHighlight}
      />
    )

    expect(screen.queryByText(/population 0/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
