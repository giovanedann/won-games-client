import { screen } from '@testing-library/react'
import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import gameCardSliderMock from 'components/GameCardSlider/data.mock'
import renderWithTheme from 'utils/tests/renderWithTheme'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="base-mock">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="explore-sidebar-mock">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="game-card-mock" />
  }
}))

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <Games
        filterItems={exploreSidebarMocks}
        games={[gameCardSliderMock[0]]}
      />
    )

    expect(screen.getByTestId('explore-sidebar-mock')).toBeInTheDocument()
    expect(screen.getByTestId('game-card-mock')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
