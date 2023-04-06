import { screen } from '@testing-library/react'
import exploreSidebarMocks from 'components/ExploreSidebar/data.mock'
import renderWithTheme from 'utils/tests/renderWithTheme'
import { MockedProvider } from '@apollo/client/testing'

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

describe('<Games />', () => {
  it('should render the loading state when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={exploreSidebarMocks} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading\.../i)).toBeInTheDocument()
  })
})
