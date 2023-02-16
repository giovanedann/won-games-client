import { screen } from '@testing-library/react'
import Dropdown from '.'
import renderWithTheme from 'utils/tests/renderWithTheme'
import userEvent from '@testing-library/user-event'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">Dropdown</h1>

    renderWithTheme(
      <Dropdown title={title}>
        <p>Content</p>
      </Dropdown>
    )
  })

  it('should render the title', () => {
    expect(screen.getByText(/dropdown/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/toggle dropdown/i)).toBeInTheDocument()
  })

  it('should show and hide the content on toggle', async () => {
    const user = userEvent.setup()

    expect(screen.queryByText(/content/i)).not.toBeVisible()

    await user.click(screen.getByLabelText(/toggle dropdown/))

    expect(screen.queryByText(/content/i)).toBeVisible()
  })
})
