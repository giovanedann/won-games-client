import { screen, render } from 'utils/tests/render'
import Dropdown from '.'

import userEvent from '@testing-library/user-event'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">Dropdown</h1>

    render(
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

  it('should close the dropdown when clicking the overlay', async () => {
    const user = userEvent.setup()

    expect(screen.queryByText(/content/i)).not.toBeVisible()

    await user.click(screen.getByLabelText(/toggle dropdown/))

    expect(screen.queryByText(/content/i)).toBeVisible()

    const overlay =
      screen.getByText(/content/i).parentElement?.nextElementSibling

    await user.click(overlay!)

    expect(screen.queryByText(/content/i)).not.toBeVisible()
  })
})
