import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import renderWithTheme from 'utils/tests/renderWithTheme'
import { MockedProvider } from '@apollo/client/testing'

import Games from '.'

import { gamesMock, loadMoreGamesMock } from './mocks'
import apolloCache from 'infra/apollo/apolloCache'

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

describe('<Games />', () => {
  it('should render the loading state when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading\.../i)).toBeInTheDocument()
  })

  it('should render the sections correctly', async () => {
    renderWithTheme(
      <MockedProvider mocks={gamesMock} addTypename={false}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    // starts with loading until request is done
    expect(screen.getByText(/loading\.../i)).toBeInTheDocument()

    expect(
      await screen.findByTestId('explore-sidebar-mock')
    ).toBeInTheDocument()

    expect(await screen.findByText(/mocked game/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /show more/i
      })
    ).toBeInTheDocument()
  })

  it('should load more games when show more button is clicked', async () => {
    const user = userEvent.setup()

    renderWithTheme(
      <MockedProvider mocks={loadMoreGamesMock} cache={apolloCache}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    expect(await screen.findByText(/mocked game/i)).toBeInTheDocument()
    expect(screen.queryByText(/load more game/i)).not.toBeInTheDocument()

    await user.click(
      await screen.findByRole('button', {
        name: /show more/i
      })
    )

    expect(await screen.findByText(/load more game/i)).toBeInTheDocument()
  })
})
