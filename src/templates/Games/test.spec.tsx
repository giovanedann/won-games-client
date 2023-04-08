import { screen } from '@testing-library/react'
import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import renderWithTheme from 'utils/tests/renderWithTheme'
import { MockedProvider } from '@apollo/client/testing'

import Games from '.'
import { GET_GAMES } from 'graphql/queries/games'

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
      <MockedProvider
        mocks={[
          {
            request: { query: GET_GAMES, variables: { limit: 15 } },
            result: {
              data: {
                games: [
                  {
                    name: 'Mocked game',
                    slug: 'mocked-game',
                    cover: { url: '/uploads/mocked-img-url.jpg' },
                    developers: [{ name: 'Mocked developer' }],
                    price: 65.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    // starts with loading until request is done
    expect(screen.getByText(/loading\.../i)).toBeInTheDocument()

    expect(
      await screen.findByTestId('explore-sidebar-mock')
    ).toBeInTheDocument()

    expect(await screen.findByText(/mocked game/i)).toBeInTheDocument()

    screen.debug()
    expect(
      screen.getByRole('button', {
        name: /show more/i
      })
    ).toBeInTheDocument()
  })
})
