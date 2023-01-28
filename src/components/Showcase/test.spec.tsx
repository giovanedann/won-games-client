/* eslint-disable @typescript-eslint/no-unused-vars */
import 'match-media-mock'
import { screen } from '@testing-library/react'
import Showcase from '.'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import renderWithTheme from 'utils/tests/renderWithTheme'

const props = {
  title: 'Most popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render the complete showcase', () => {
    renderWithTheme(<Showcase {...props} />)

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
    renderWithTheme(<Showcase {...withoutTitleProps} />)

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
    renderWithTheme(<Showcase {...withoutHighlightProps} />)

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
    renderWithTheme(<Showcase {...withoutGamesProps} />)

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
