import 'session.mock'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'

import { MockedProvider } from '@apollo/client/testing'

import Games from '.'

import { emptyGamesMock, gamesMock, loadMoreGamesMock } from './mocks'
import apolloCache from 'infra/apollo/apolloCache'
import { render } from 'utils/tests/render'

const useRouter = jest.spyOn(require('next/router'), 'useRouter') // eslint-disable-line @typescript-eslint/no-var-requires
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="base-mock">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render the loading state when starting the template', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading\.../i)).toBeInTheDocument()
  })

  it('should render the sections correctly', async () => {
    render(
      <MockedProvider mocks={gamesMock} addTypename={false}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    // starts with loading until request is done
    expect(screen.getByText(/loading\.../i)).toBeInTheDocument()

    expect(await screen.findByText(/mocked game/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /show more/i
      })
    ).toBeInTheDocument()
  })

  it('should load more games when show more button is clicked', async () => {
    const user = userEvent.setup()

    render(
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

    expect(
      screen.queryByRole('button', {
        name: /show more/i
      })
    ).not.toBeInTheDocument()
  })

  it('should change the url filter when selecting a filter', async () => {
    const user = userEvent.setup()
    render(
      <MockedProvider mocks={loadMoreGamesMock} cache={apolloCache}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    await user.click(await screen.findByRole('checkbox', { name: /windows/i }))
    await user.click(await screen.findByRole('checkbox', { name: /linux/i }))
    await user.click(await screen.findByLabelText(/low to high/i))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })

  it('should show the empty state when games is empty', async () => {
    render(
      <MockedProvider mocks={emptyGamesMock} addTypename={false}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    await waitForElementToBeRemoved(screen.getByText(/loading\.../i))

    expect(
      screen.getByText(/we didn't find any games that matches this filter/i)
    ).toBeInTheDocument()
  })
})
