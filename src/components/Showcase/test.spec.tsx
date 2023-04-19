/* eslint-disable @typescript-eslint/no-unused-vars */
import 'match-media-mock'
import { screen, render } from 'utils/tests/render'
import Showcase from '.'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

const props = {
  title: 'Most popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render the complete showcase', () => {
    render(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { level: 2, name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render the showcase without title', () => {
    const { title, ...withoutTitleProps } = props
    render(<Showcase {...withoutTitleProps} />)

    expect(
      screen.queryByRole('heading', { level: 2, name: /most popular/i })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render the showcase without highlight', () => {
    const { highlight, ...withoutHighlightProps } = props
    render(<Showcase {...withoutHighlightProps} />)

    expect(
      screen.getByRole('heading', { level: 2, name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render the showcase without games', () => {
    const { games, ...withoutGamesProps } = props
    render(<Showcase {...withoutGamesProps} />)

    expect(
      screen.getByRole('heading', { level: 2, name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
